(function () {
  "use strict";

  const storage = {
    get(key, fallback) {
      try {
        const value = window.localStorage.getItem(key);
        return value === null ? fallback : JSON.parse(value);
      } catch (error) {
        console.warn("localStorage konnte nicht gelesen werden:", error);
        return fallback;
      }
    },
    getInteger(key, fallback, min, max) {
      const value = Number(storage.get(key, fallback));
      const integer = Number.isInteger(value) ? value : fallback;
      return clamp(integer, min, max);
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.warn("localStorage konnte nicht gespeichert werden:", error);
      }
    },
    remove(key) {
      try {
        window.localStorage.removeItem(key);
      } catch (error) {
        console.warn("localStorage konnte nicht gelöscht werden:", error);
      }
    }
  };

  const data = normalizeData(window.AP1_DATA);
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  // Quiz-Konfiguration: Jeder Durchlauf nutzt den auswählbaren Umfang aus dem gewählten Pool.
  const QUIZ_QUESTION_COUNT_OPTIONS = [10, 25, 40];
  const DEFAULT_QUIZ_QUESTION_COUNT = 40;
  const QUIZ_QUESTION_COUNT_KEY = "ap1QuizQuestionCount";
  const LEARNING_PROGRESS_KEY = "ap1LearningProgress";
  const INCORRECT_QUESTION_IDS_KEY = "ap1IncorrectQuestionIds";
  const RETRY_INCORRECT_CATEGORY_ID = "fehler-wiederholen";
  const DEFAULT_LEARNING_PROGRESS = {
    quizSessions: 0,
    bestScore: 0,
    lastScore: 0,
    lastCategory: "",
    lastCompletedAt: "",
    flashcardsViewed: 0
  };

  // Quiz-State: speichert Auswahl, aktive Fragen und Antwortverlauf für die Statistik.
  let selectedCategory = storage.get("ap1SelectedQuizCategory", "alle");
  let selectedQuizQuestionCount = getStoredQuizQuestionCount();
  let activeQuestions = [];
  let quizAnswers = [];
  let quizAnswered = 0;
  let quizScore = 0;
  let quizIndex = 0;
  let questionLocked = false;
  let currentQuestionAnswered = false;
  let explanationPanelOpen = false;
  let currentQuizProgressSaved = false;
  let flashcardIndex = storage.getInteger("ap1FlashcardIndex", 0, 0, Math.max(data.flashcards.length - 1, 0));
  let flashcardBackVisible = false;

  function init() {
    initNavigation();
    renderChapters(data.chapters);
    initSearch();
    initQuizCategorySelection();
    initQuizLengthSelection();
    initQuizControls();
    initIncorrectQuestionReset();
    renderLearningProgressDashboard();
    initLearningProgressReset();
    renderFlashcard();
    initFlashcardControls();
    initResultsModalControls();
  }

  function initNavigation() {
    const toggle = $("#nav-toggle") || $(".nav-toggle");
    const nav = $("#main-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function renderChapters(chapters) {
    const container = $("#chapters-container");
    if (!container) return;

    container.innerHTML = "";
    if (!data.chapters.length) {
      container.appendChild(createMessage("Aktuell sind keine Lernkapitel verfügbar."));
      setText("#search-status", "Keine Kapitel verfügbar.");
      return;
    }
    if (!chapters.length) {
      container.appendChild(createMessage("Keine Kapitel zum Suchbegriff gefunden."));
      return;
    }

    chapters.forEach((chapter) => {
      const article = document.createElement("article");
      article.className = "card chapter-card";
      article.id = chapter.id;
      article.innerHTML = `
        <h3>${escapeHtml(chapter.title)}</h3>
        <p>${escapeHtml(chapter.description)}</p>
        <ul>${chapter.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        <p class="mnemonic"><strong>Merksatz:</strong> ${escapeHtml(chapter.mnemonic)}</p>
        ${chapter.code ? `<pre><code>${escapeHtml(chapter.code)}</code></pre>` : ""}
      `;
      container.appendChild(article);
    });
  }

  function initSearch() {
    const search = $("#chapter-search");
    const status = $("#search-status");
    if (!search || !status) return;

    search.addEventListener("input", (event) => {
      const term = event.target.value.trim().toLowerCase();
      const filtered = !term ? data.chapters : data.chapters.filter((chapter) => {
        const haystack = [chapter.title, chapter.description, chapter.mnemonic, ...chapter.bullets].join(" ").toLowerCase();
        return haystack.includes(term);
      });
      renderChapters(filtered);
      status.textContent = term ? `${filtered.length} von ${data.chapters.length} Kapiteln gefunden.` : "Alle Kapitel werden angezeigt.";
    });
  }

  // Kategorieauswahl: baut die auswählbaren Quizbereiche auf.
  function initQuizCategorySelection() {
    const options = $("#quiz-category-options");
    if (!options) return;
    validateStoredQuizCategory();
    renderQuizCategoryOptions();
    updateSelectedCategorySummary();
    updateIncorrectQuestionStatus();
  }

  // Kategorieauswahl: rendert moderne Karten für alle Quizbereiche.
  function renderQuizCategoryOptions() {
    const options = $("#quiz-category-options");
    if (!options) return;
    options.innerHTML = "";
    updateIncorrectQuestionStatus();
    if (!data.quizCategories.length) {
      options.appendChild(createMessage("Keine Quiz-Kategorien verfügbar."));
      return;
    }

    const categoryCards = [
      {
        id: "alle",
        title: "Alle Themen",
        description: "Gemischtes Training aus allen AP1-Bereichen."
      },
      ...data.quizCategories.filter((category) => category.id !== "alle")
    ];

    const retryQuestionCount = getRetryIncorrectQuestions().length;
    const retryAvailable = retryQuestionCount > 0;
    const retrySelected = selectedCategory === RETRY_INCORRECT_CATEGORY_ID;
    const retryButton = document.createElement("button");
    retryButton.type = "button";
    retryButton.className = "category-button category-card-button retry-category-button";
    if (retrySelected) retryButton.classList.add("selected");
    retryButton.disabled = !retryAvailable;
    retryButton.setAttribute("aria-pressed", String(retrySelected));
    retryButton.setAttribute("aria-describedby", "retry-category-status");
    retryButton.addEventListener("click", () => {
      if (!retryAvailable) return;
      selectQuizCategory(RETRY_INCORRECT_CATEGORY_ID);
    });
    retryButton.innerHTML = `
      <span class="category-card-top">
        <span class="category-icon retry-category-icon" aria-hidden="true">↻</span>
        <span class="category-count">${retryQuestionCount} gespeichert</span>
      </span>
      <span class="category-title">Fehler wiederholen</span>
      <span id="retry-category-status" class="category-description">${retryAvailable
        ? "Trainiere nur die Fragen, die du zuvor falsch beantwortet hast."
        : "Noch keine Fehler gespeichert. Beantworte zuerst einige Fragen falsch, um sie später gezielt zu wiederholen."}</span>
    `;
    options.appendChild(retryButton);

    categoryCards.forEach((category) => {
      const isSelected = category.id === selectedCategory;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "category-button category-card-button";
      if (isSelected) button.classList.add("selected");
      button.setAttribute("aria-pressed", String(isSelected));
      button.addEventListener("click", () => selectQuizCategory(category.id));

      const title = category.title || "Unbenannte Kategorie";
      const description = category.description || "Gezieltes AP1-Training mit passenden Quizfragen.";
      const questionCount = getCategoryQuestionCount(category.id);
      button.innerHTML = `
        <span class="category-card-top">
          <span class="category-icon" aria-hidden="true">${getCategoryIcon(category.id)}</span>
          <span class="category-count">${questionCount} Fragen</span>
        </span>
        <span class="category-title">${escapeHtml(title)}</span>
        <span class="category-description">${escapeHtml(description)}</span>
      `;
      options.appendChild(button);
    });
  }

  // Kategorieauswahl: speichert die gewählte Kategorie und führt zum nächsten Schritt.
  function selectQuizCategory(categoryId) {
    if (categoryId === RETRY_INCORRECT_CATEGORY_ID && getRetryIncorrectQuestions().length === 0) {
      selectedCategory = "alle";
      storage.set("ap1SelectedQuizCategory", selectedCategory);
      renderQuizCategoryOptions();
      updateSelectedCategorySummary();
      return;
    }
    selectedCategory = categoryId;
    storage.set("ap1SelectedQuizCategory", selectedCategory);
    renderQuizCategoryOptions();
    updateSelectedCategorySummary();
    scrollToQuizLengthSelector();
  }

  function scrollToQuizLengthSelector() {
    scrollElementIntoView($(".quiz-length-selector"), "center");
  }

  function scrollToActiveQuizQuestion() {
    scrollElementIntoView($("#quiz-card"), "start");
  }

  function scrollElementIntoView(element, block = "center") {
    if (!element) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block
      });
    });
  }

  function getStoredQuizQuestionCount() {
    const storedValue = Number(storage.get(QUIZ_QUESTION_COUNT_KEY, DEFAULT_QUIZ_QUESTION_COUNT));
    return QUIZ_QUESTION_COUNT_OPTIONS.includes(storedValue) ? storedValue : DEFAULT_QUIZ_QUESTION_COUNT;
  }

  function initQuizLengthSelection() {
    selectedQuizQuestionCount = getStoredQuizQuestionCount();
    const inputs = $$('input[name="quiz-length"]');
    inputs.forEach((input) => {
      input.checked = Number(input.value) === selectedQuizQuestionCount;
      input.addEventListener("change", () => {
        const nextCount = Number(input.value);
        if (!input.checked || !QUIZ_QUESTION_COUNT_OPTIONS.includes(nextCount)) return;
        selectedQuizQuestionCount = nextCount;
        storage.set(QUIZ_QUESTION_COUNT_KEY, selectedQuizQuestionCount);
        updateSelectedQuizLengthSummary();
      });
    });
    storage.set(QUIZ_QUESTION_COUNT_KEY, selectedQuizQuestionCount);
    updateSelectedQuizLengthSummary();
  }

  function updateSelectedQuizLengthSummary() {
    setText("#selected-quiz-length-summary", `Ausgewählt: ${selectedQuizQuestionCount} Fragen`);
  }

  function getCategoryIcon(categoryId) {
    const icons = {
      alle: "🎯",
      "hardware-os": "🖥️",
      [RETRY_INCORRECT_CATEGORY_ID]: "↻",
      netzwerke: "🌐",
      "it-sicherheit": "🔐",
      "datenbanken-sql": "🗄️",
      softwareentwicklung: "💻",
      "oop-uml": "📐",
      projektmanagement: "📋",
      "datenschutz-dsgvo": "🛡️"
    };
    return icons[categoryId] || "📚";
  }

  function getCategoryQuestionCount(categoryId) {
    return getQuestionsForCategory(categoryId).length;
  }

  // Kategorieauswahl: findet Metadaten zur Kategorie.
  function getCategoryById(categoryId) {
    const category = data.quizCategories.find((item) => item.id === categoryId);
    if (category) return category;
    if (categoryId === "alle") return { id: "alle", title: "Alle Themen", description: "Gemischtes Quiz mit allen Fragen." };
    if (categoryId === RETRY_INCORRECT_CATEGORY_ID) return { id: RETRY_INCORRECT_CATEGORY_ID, title: "Fehler wiederholen", description: "Wiederholung lokal gespeicherter Fehler." };
    return null;
  }

  // Kategorieauswahl: filtert Fragen nach Auswahl.
  function getQuestionsForCategory(categoryId) {
    if (categoryId === "alle") return data.quiz;
    if (categoryId === RETRY_INCORRECT_CATEGORY_ID) return getRetryIncorrectQuestions();
    return data.quiz.filter((question) => question.category === categoryId);
  }

  // Kategorieauswahl: aktualisiert den Auswahlhinweis.
  function updateIncorrectQuestionStatus() {
    const statusElement = $("#incorrect-question-status");
    const resetButton = $("#reset-incorrect-questions");
    const retryQuestionCount = getRetryIncorrectQuestions().length;
    if (resetButton) resetButton.disabled = retryQuestionCount === 0;
    if (!statusElement) return;
    if (retryQuestionCount === 0) {
      statusElement.textContent = "Aktuell sind keine Fehler gespeichert.";
      return;
    }
    if (retryQuestionCount === 1) {
      statusElement.textContent = "1 Fehlerfrage gespeichert.";
      return;
    }
    statusElement.textContent = `${retryQuestionCount} Fehlerfragen gespeichert.`;
  }

  function refreshIncorrectQuestionUi() {
    updateIncorrectQuestionStatus();
    renderQuizCategoryOptions();
    updateSelectedCategorySummary();
  }

  function initIncorrectQuestionReset() {
    const resetButton = $("#reset-incorrect-questions");
    if (!resetButton) return;
    resetButton.addEventListener("click", resetIncorrectQuestions);
    updateIncorrectQuestionStatus();
  }

  function resetIncorrectQuestions() {
    const confirmed = window.confirm("Möchtest du wirklich alle gespeicherten Fehlerfragen löschen?");
    if (!confirmed) return;
    saveIncorrectQuestionIds([]);
    if (selectedCategory === RETRY_INCORRECT_CATEGORY_ID) {
      selectedCategory = "alle";
      storage.set("ap1SelectedQuizCategory", selectedCategory);
    }
    renderQuizCategoryOptions();
    updateSelectedCategorySummary();
    updateIncorrectQuestionStatus();
  }

  function updateSelectedCategorySummary() {
    validateStoredQuizCategory();
    const category = getCategoryById(selectedCategory);
    const questions = getQuestionsForCategory(selectedCategory);
    if (selectedCategory === RETRY_INCORRECT_CATEGORY_ID) {
      setText("#selected-category-summary", `Ausgewählt: Fehler wiederholen – ${questions.length} gespeicherte Fragen verfügbar.`);
      return;
    }
    if (category) {
      setText("#selected-category-summary", `Ausgewählt: ${category.title} – ${questions.length} Fragen verfügbar.`);
      return;
    }
    setText("#selected-category-summary", `Ausgewählt: Alle Themen – ${data.quiz.length} Fragen verfügbar.`);
  }

  // Sampling: mischt eine Kopie eines Arrays, ohne die Originaldaten zu verändern.
  function shuffleArray(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return shuffled;
  }

  // Sampling: zieht maximal amount Fragen ohne Wiederholung aus dem Pool.
  function pickQuestionsForQuiz(questionPool, amount) {
    const safePool = Array.isArray(questionPool) ? questionPool : [];
    return shuffleArray(safePool).slice(0, Math.min(amount, safePool.length));
  }

  // Antwortvorbereitung: mischt richtige und falsche Antworten für die aktuelle Session.
  function prepareAnswersForQuiz(question) {
    const answers = [
      { text: question.correctAnswer, correct: true },
      ...question.wrongAnswers.map((answer) => ({ text: answer, correct: false }))
    ];
    return shuffleArray(answers);
  }

  // Quizstart: erzeugt aus einer Poolfrage eine temporäre Quizfrage mit zufälliger Antwortposition.
  function prepareQuestionForQuiz(question) {
    const shuffledAnswers = prepareAnswersForQuiz(question);
    return {
      id: question.id,
      category: question.category,
      topic: question.topic,
      difficulty: question.difficulty,
      question: question.question,
      options: shuffledAnswers.map((answer) => answer.text),
      correctIndex: shuffledAnswers.findIndex((answer) => answer.correct),
      explanation: question.explanation
    };
  }

  // Quizstart: baut den tatsächlichen Quizdurchlauf mit maximal 40 eindeutigen Fragen.
  function prepareQuizQuestions(questionPool, amount) {
    return pickQuestionsForQuiz(questionPool, amount).map(prepareQuestionForQuiz);
  }

  // Quizstart: setzt die Session zurück und zeigt die erste Frage an.
  function startQuiz() {
    validateStoredQuizCategory();
    const questionPool = getQuestionsForCategory(selectedCategory);
    selectedQuizQuestionCount = getStoredQuizQuestionCount();
    activeQuestions = prepareQuizQuestions(questionPool, selectedQuizQuestionCount);
    quizAnswers = [];
    quizAnswered = 0;
    quizScore = 0;
    quizIndex = 0;
    questionLocked = false;
    currentQuestionAnswered = false;
    explanationPanelOpen = false;
    currentQuizProgressSaved = false;
    resetAnswerExplanation();
    updateQuizProgressBar();
    if (activeQuestions.length === 0) {
      setText("#selected-category-summary", selectedCategory === RETRY_INCORRECT_CATEGORY_ID
        ? "Noch keine Fehler gespeichert. Beantworte zuerst einige Fragen falsch, um sie später gezielt zu wiederholen."
        : "Für diese Kategorie sind noch keine Fragen verfügbar.");
      renderQuizCategoryOptions();
      return;
    }
    const startPanel = $("#quiz-start-panel");
    const quizCard = $("#quiz-card");
    if (startPanel) startPanel.classList.add("is-hidden");
    if (quizCard) quizCard.classList.remove("is-hidden");
    renderQuiz();
    scrollToActiveQuizQuestion();
  }

  // Quizstart: rendert die aktuelle Frage der aktiven Session.
  function renderQuiz() {
    const questionEl = $("#quiz-question");
    const options = $("#quiz-options");
    if (!questionEl || !options) return;

    questionLocked = false;
    currentQuestionAnswered = false;
    explanationPanelOpen = false;
    options.innerHTML = "";
    setDisabled("#next-question", true);
    setText("#quiz-score", `Punkte: ${quizScore}`);
    resetAnswerExplanation();
    updateQuizProgressBar();

    if (!activeQuestions.length) {
      setText("#quiz-progress", "Keine Fragen ausgewählt");
      questionEl.textContent = "Bitte wähle zuerst eine Quiz-Kategorie.";
      setText("#quiz-feedback", "Starte ein Quiz über den Auswahlbereich.");
      updateQuizProgressBar();
      return;
    }

    if (quizAnswered >= activeQuestions.length) {
      showResultsModal();
      return;
    }

    const nextButton = $("#next-question");
    if (nextButton) nextButton.textContent = "Nächste Frage";

    quizIndex = clamp(quizAnswered, 0, activeQuestions.length - 1);
    const question = activeQuestions[quizIndex];
    setText("#quiz-progress", `Frage ${quizAnswered + 1} von ${activeQuestions.length}`);
    setText("#quiz-category-label", `Kategorie: ${getCategoryById(question.category)?.title || "Unbekannt"}`);
    updateQuizProgressBar();
    questionEl.textContent = question.question;
    setText("#quiz-feedback", "");

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-button";
      button.textContent = option;
      button.addEventListener("click", () => answerQuestion(index));
      options.appendChild(button);
    });
  }

  // Antwortauswertung: markiert Antworten und speichert den Verlauf.
  function answerQuestion(selectedIndex) {
    if (questionLocked || quizAnswered >= activeQuestions.length) return;
    questionLocked = true;
    const question = activeQuestions[quizIndex];
    const buttons = $$(".option-button");
    buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === question.correctIndex) {
        button.classList.add("correct");
        button.setAttribute("aria-label", `${button.textContent} – richtige Antwort`);
      } else if (index === selectedIndex) {
        button.classList.add("wrong");
        button.setAttribute("aria-label", `${button.textContent} – deine Antwort, leider falsch`);
      } else {
        button.classList.add("muted");
      }
    });
    const correct = selectedIndex === question.correctIndex;
    quizAnswers.push({
      questionId: question.id,
      poolQuestionId: question.id,
      category: question.category,
      topic: question.topic,
      question: question.question,
      selectedAnswer: question.options[selectedIndex] || "",
      correctAnswer: question.options[question.correctIndex] || "",
      explanation: question.explanation || "",
      correct,
      selectedIndex,
      correctIndex: question.correctIndex
    });
    if (correct) {
      quizScore = clamp(quizScore + 1, 0, activeQuestions.length);
      if (selectedCategory === RETRY_INCORRECT_CATEGORY_ID) removeIncorrectQuestion(question);
    } else {
      trackIncorrectQuestion(question);
    }
    updateIncorrectQuestionStatus();
    quizAnswered = clamp(quizAnswered + 1, 0, activeQuestions.length);
    currentQuestionAnswered = true;
    setText("#quiz-score", `Punkte: ${quizScore}`);
    updateQuizProgressBar();
    setText("#quiz-feedback", correct ? "Richtig beantwortet." : "Leider falsch. Die richtige Antwort ist markiert.");
    enableAnswerExplanation(question);
    if (quizAnswered >= activeQuestions.length) {
      setText("#quiz-feedback", `${correct ? "Richtig beantwortet." : "Leider falsch. Die richtige Antwort ist markiert."} Quiz abgeschlossen: ${quizScore} von ${activeQuestions.length} Punkten.`);
      setDisabled("#next-question", false);
      const nextButton = $("#next-question");
      if (nextButton) nextButton.textContent = "Ergebnis anzeigen";
      return;
    }
    setDisabled("#next-question", false);
  }


  function updateQuizProgressBar() {
    const bar = $("#quiz-progress-bar");
    const fill = $("#quiz-progress-fill");
    const total = activeQuestions.length;
    const visibleStep = total ? Math.min(quizAnswered + (currentQuestionAnswered ? 0 : 1), total) : 0;
    const completedStep = total ? Math.min(Math.max(visibleStep, quizAnswered), total) : 0;
    const percent = total ? Math.round((completedStep / total) * 100) : 0;
    if (fill) fill.style.width = `${percent}%`;
    if (bar) {
      bar.setAttribute("aria-valuenow", String(percent));
      bar.setAttribute("aria-valuetext", total ? `Frage ${completedStep} von ${total}` : "Kein Quiz gestartet");
    }
  }

  function resetAnswerExplanation() {
    const toggle = $("#answer-explanation-toggle");
    const panel = $("#answer-explanation-panel");
    setText("#answer-explanation-text", "");
    explanationPanelOpen = false;
    if (toggle) {
      toggle.classList.add("is-hidden");
      toggle.disabled = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "ⓘ Erklärung anzeigen";
    }
    if (panel) panel.classList.add("is-hidden");
  }

  function enableAnswerExplanation(question) {
    const toggle = $("#answer-explanation-toggle");
    setText("#answer-explanation-text", question.explanation || "Zu dieser Frage ist keine Erklärung hinterlegt.");
    if (toggle) {
      toggle.classList.remove("is-hidden");
      toggle.disabled = false;
      toggle.setAttribute("aria-expanded", "false");
    }
  }

  function toggleAnswerExplanation() {
    if (!currentQuestionAnswered) return;
    const toggle = $("#answer-explanation-toggle");
    const panel = $("#answer-explanation-panel");
    if (!toggle || !panel) return;
    explanationPanelOpen = !explanationPanelOpen;
    panel.classList.toggle("is-hidden", !explanationPanelOpen);
    toggle.setAttribute("aria-expanded", String(explanationPanelOpen));
    toggle.textContent = explanationPanelOpen ? "ⓘ Erklärung ausblenden" : "ⓘ Erklärung anzeigen";
    if (explanationPanelOpen) panel.focus({ preventScroll: true });
  }

  // Quizstart: verbindet Buttons mit Start, Wechsel und Neustart.
  function initQuizControls() {
    const startButton = $("#start-quiz");
    const nextButton = $("#next-question");
    const restartButton = $("#restart-quiz");
    const changeButton = $("#change-category");
    const explanationButton = $("#answer-explanation-toggle");

    if (startButton) startButton.addEventListener("click", () => startQuiz());
    if (nextButton) {
      nextButton.addEventListener("click", () => {
        if (quizAnswered < activeQuestions.length) {
          renderQuiz();
          return;
        }
        showResultsModal();
      });
    }
    if (restartButton) restartButton.addEventListener("click", () => startQuiz());
    if (changeButton) changeButton.addEventListener("click", () => showQuizStartPanel());
    if (explanationButton) explanationButton.addEventListener("click", () => toggleAnswerExplanation());
  }

  // Reset-Funktionen: wechseln zwischen Quizkarte und Auswahlbereich.
  function showQuizStartPanel() {
    const quizCard = $("#quiz-card");
    const startPanel = $("#quiz-start-panel");
    const options = $("#quiz-options");
    if (quizCard) quizCard.classList.add("is-hidden");
    if (startPanel) startPanel.classList.remove("is-hidden");
    setText("#quiz-feedback", "");
    setText("#quiz-question", "");
    resetAnswerExplanation();
    updateQuizProgressBar();
    if (options) options.innerHTML = "";
    renderQuizCategoryOptions();
    updateSelectedCategorySummary();
  }

  // Ergebnisberechnung: fasst Punkte, Kategorien und Verlauf zusammen.
  function calculateQuizResults() {
    const total = quizAnswers.length;
    const correct = quizAnswers.filter((answer) => answer.correct).length;
    const wrong = total - correct;
    const percent = total ? formatPercent((correct / total) * 100) : 0;
    const categoryMap = new Map();
    quizAnswers.forEach((answer, index) => {
      const category = getCategoryById(answer.category) || { id: answer.category, title: "Unbekannt" };
      if (!categoryMap.has(answer.category)) categoryMap.set(answer.category, { id: answer.category, title: category.title, total: 0, correct: 0, percent: 0 });
      const entry = categoryMap.get(answer.category);
      entry.total += 1;
      if (answer.correct) entry.correct += 1;
      entry.percent = formatPercent((entry.correct / entry.total) * 100);
    });
    const categoryResults = Array.from(categoryMap.values());
    const weakTopics = calculateWeakTopics(quizAnswers);
    const strongestCategory = categoryResults.reduce((best, item) => (!best || item.percent > best.percent ? item : best), null);
    const weakestCategory = categoryResults.reduce((worst, item) => (!worst || item.percent < worst.percent ? item : worst), null);
    let runningCorrect = 0;
    const history = quizAnswers.map((answer, index) => {
      if (answer.correct) runningCorrect += 1;
      return formatPercent((runningCorrect / (index + 1)) * 100);
    });
    const incorrectAnswers = quizAnswers
      .filter((answer) => !answer.correct)
      .map((answer) => ({
        question: answer.question || "",
        selectedAnswer: answer.selectedAnswer || "",
        correctAnswer: answer.correctAnswer || "",
        explanation: answer.explanation || "",
        correct: false
      }));
    return { total, correct, wrong, percent, categoryResults, strongestCategory, weakestCategory, history, incorrectAnswers, weakTopics };
  }

  function calculateWeakTopics(answers) {
    const topicMap = new Map();
    answers.forEach((answer) => {
      const topic = typeof answer.topic === "string" && answer.topic.trim() ? answer.topic.trim() : "unbekannt";
      if (!topicMap.has(topic)) {
        topicMap.set(topic, { topic, title: formatTopicTitle(topic), total: 0, wrong: 0, correct: 0, accuracy: 0 });
      }
      const entry = topicMap.get(topic);
      entry.total += 1;
      if (answer.correct) {
        entry.correct += 1;
      } else {
        entry.wrong += 1;
      }
      entry.accuracy = formatPercent((entry.correct / entry.total) * 100);
    });

    return Array.from(topicMap.values())
      .filter((topic) => topic.wrong > 0)
      .sort((a, b) => b.wrong - a.wrong || a.accuracy - b.accuracy || a.title.localeCompare(b.title, "de"))
      .slice(0, 3);
  }

  function formatTopicTitle(topic) {
    return String(topic)
      .replace(/-/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\b\S/g, (char) => char.toLocaleUpperCase("de-DE")) || "Unbekannt";
  }

  // Ergebnis-Feedback: motivierende Texte passend zur Trefferquote.
  function getResultFeedback(percent) {
    if (percent >= 90) {
      return {
        title: "Sehr stark!",
        message: "Du bist in diesem Themenbereich schon sehr sicher und gehst mit viel Rückenwind in die AP1-Vorbereitung."
      };
    }
    if (percent >= 75) {
      return {
        title: "Starkes Ergebnis!",
        message: "Du hast eine gute Basis. Festige jetzt gezielt die wenigen Themen, bei denen noch Unsicherheit bleibt."
      };
    }
    if (percent >= 60) {
      return {
        title: "Solide Grundlage.",
        message: "Du bist auf einem guten Weg. Wiederhole einzelne Lernfelder, damit aus Grundlagen prüfungssichere Routine wird."
      };
    }
    if (percent >= 40) {
      return {
        title: "Weiter üben lohnt sich.",
        message: "Du hast schon wichtige Ansätze. Nutze die Auswertung, um schwächere Bereiche Schritt für Schritt zu festigen."
      };
    }
    return {
      title: "Guter Start – jetzt gezielt wiederholen.",
      message: "Nutze die Auswertung, um die Grundlagen in den schwächeren Bereichen gezielt zu wiederholen."
    };
  }

  // Lernempfehlung: nutzt stärkste und schwächste Kategorie aus der bestehenden Auswertung.
  function renderLearningRecommendation(results) {
    const strongest = results.strongestCategory;
    const weakest = results.weakestCategory;
    const strongestText = strongest ? `Stärkster Bereich: ${escapeHtml(strongest.title)} (${strongest.percent} %).` : "Stärkster Bereich: noch nicht verfügbar.";
    const weakestText = weakest ? `Wiederholen: ${escapeHtml(weakest.title)} (${weakest.percent} %).` : "Wiederholen: Starte mit den Themen, bei denen du dich am unsichersten fühlst.";
    const recommendation = weakest
      ? `Empfehlung: Wiederhole besonders den Bereich „${escapeHtml(weakest.title)}“.`
      : "Empfehlung: Wiederhole die wichtigsten AP1-Grundlagen und starte anschließend ein weiteres Quiz.";
    return `
      <h4>Lernempfehlung</h4>
      <p>${recommendation}</p>
      <dl class="recommendation-list">
        <div><dt>Stärke</dt><dd>${strongestText}</dd></div>
        <div><dt>Fokus</dt><dd>${weakestText}</dd></div>
      </dl>
    `;
  }


  function initLearningProgressReset() {
    const resetButton = $("#reset-learning-progress");
    if (!resetButton) return;

    resetButton.addEventListener("click", resetLearningProgress);
  }

  function resetLearningProgress() {
    const confirmed = window.confirm("Möchtest du deinen lokalen Lernfortschritt wirklich zurücksetzen?");
    if (!confirmed) return;

    storage.remove(LEARNING_PROGRESS_KEY);
    renderLearningProgressDashboard();
  }

  function getLearningProgress() {
    const storedProgress = storage.get(LEARNING_PROGRESS_KEY, DEFAULT_LEARNING_PROGRESS);
    return {
      ...DEFAULT_LEARNING_PROGRESS,
      ...(storedProgress && typeof storedProgress === "object" ? storedProgress : {})
    };
  }

  function saveLearningProgress(progress) {
    storage.set(LEARNING_PROGRESS_KEY, { ...DEFAULT_LEARNING_PROGRESS, ...progress });
    renderLearningProgressDashboard();
  }

  function getIncorrectQuestionIds() {
    const storedIds = storage.get(INCORRECT_QUESTION_IDS_KEY, []);
    if (!Array.isArray(storedIds)) return [];
    return storedIds.filter((id) => typeof id === "string" && id.trim().length > 0);
  }

  function getRetryIncorrectQuestions() {
    const retryIds = new Set(getIncorrectQuestionIds());
    return data.quiz.filter((question) => typeof question.id === "string" && retryIds.has(question.id));
  }

  function removeIncorrectQuestion(question) {
    if (!question || typeof question.id !== "string") return;
    const incorrectQuestionIds = getIncorrectQuestionIds();
    saveIncorrectQuestionIds(incorrectQuestionIds.filter((id) => id !== question.id));
    refreshIncorrectQuestionUi();
  }

  function validateStoredQuizCategory() {
    if (selectedCategory === RETRY_INCORRECT_CATEGORY_ID && getRetryIncorrectQuestions().length === 0) {
      selectedCategory = "alle";
      storage.set("ap1SelectedQuizCategory", selectedCategory);
      return;
    }
    if (selectedCategory !== "alle" && !getCategoryById(selectedCategory)) {
      selectedCategory = "alle";
      storage.set("ap1SelectedQuizCategory", selectedCategory);
    }
  }

  function saveIncorrectQuestionIds(questionIds) {
    const uniqueIds = Array.from(new Set(
      questionIds.filter((id) => typeof id === "string" && id.trim().length > 0)
    ));
    storage.set(INCORRECT_QUESTION_IDS_KEY, uniqueIds);
  }

  function trackIncorrectQuestion(question) {
    if (!question || typeof question.id !== "string") return;
    const incorrectQuestionIds = getIncorrectQuestionIds();
    if (incorrectQuestionIds.includes(question.id)) return;
    saveIncorrectQuestionIds([...incorrectQuestionIds, question.id]);
    refreshIncorrectQuestionUi();
  }

  function saveQuizProgress(results) {
    if (currentQuizProgressSaved || !results.total) return;
    const progress = getLearningProgress();
    const category = getCategoryById(selectedCategory);
    const score = clamp(results.percent, 0, 100);
    saveLearningProgress({
      ...progress,
      quizSessions: Math.max(0, Number(progress.quizSessions) || 0) + 1,
      bestScore: Math.max(Number(progress.bestScore) || 0, score),
      lastScore: score,
      lastCategory: category?.title || selectedCategory || "Alle Themen",
      lastCompletedAt: new Date().toISOString()
    });
    currentQuizProgressSaved = true;
  }

  function updateFlashcardProgress() {
    if (!data.flashcards.length) return;
    const progress = getLearningProgress();
    const viewed = Math.max(Number(progress.flashcardsViewed) || 0, flashcardIndex + 1);
    if (viewed !== progress.flashcardsViewed) saveLearningProgress({ ...progress, flashcardsViewed: viewed });
  }

  function renderLearningProgressDashboard() {
    const status = $("#dashboard-status");
    const empty = $("#dashboard-empty");
    const grid = $("#dashboard-progress-grid");
    if (!status || !empty || !grid) return;

    const progress = getLearningProgress();
    const sessions = Math.max(0, Number(progress.quizSessions) || 0);
    const flashcardsViewed = Math.max(0, Number(progress.flashcardsViewed) || 0);
    const hasQuizProgress = sessions > 0;

    empty.classList.toggle("is-hidden", hasQuizProgress);
    grid.classList.toggle("is-hidden", !hasQuizProgress);

    if (!hasQuizProgress) {
      status.textContent = flashcardsViewed > 0
        ? `Du hast schon ${flashcardsViewed} Karteikarte${flashcardsViewed === 1 ? "" : "n"} angesehen. Starte ein Quiz für mehr Fortschrittswerte.`
        : "Starte dein erstes Quiz, um deinen Lernfortschritt zu sehen.";
      return;
    }

    const bestScore = clamp(Number(progress.bestScore) || 0, 0, 100);
    const lastScore = clamp(Number(progress.lastScore) || 0, 0, 100);
    const lastCategory = progress.lastCategory || "Alle Themen";
    setText("#dashboard-quiz-sessions", String(sessions));
    setText("#dashboard-best-score", `${bestScore} %`);
    setText("#dashboard-last-category", lastCategory);
    setText("#dashboard-last-score", `${lastScore} %`);
    setText("#dashboard-flashcards-viewed", `${flashcardsViewed} angesehen`);
    status.textContent = getProgressStatusText(bestScore, lastScore);
  }

  function getProgressStatusText(bestScore, lastScore) {
    if (bestScore >= 80) return "Weiter so! Du hast bereits ein starkes Quiz-Ergebnis erreicht.";
    if (lastScore >= 60) return "Weiter so! Deine letzte Quizrunde zeigt eine solide Grundlage.";
    return "Dranbleiben lohnt sich: Wiederhole gezielt die schwächeren Themen und starte die nächste Runde.";
  }

  function appendReviewText(container, label, value) {
    const paragraph = document.createElement("p");
    paragraph.className = "incorrect-answer-review-text";

    const labelElement = document.createElement("strong");
    labelElement.textContent = label;
    paragraph.appendChild(labelElement);
    paragraph.append(" ", value);
    container.appendChild(paragraph);
  }

  function renderWeakTopicRecommendations(results) {
    const section = $("#weak-topic-recommendations");
    if (!section) return;

    section.innerHTML = "";

    const title = document.createElement("h4");
    title.textContent = "Empfohlene Wiederholung";
    section.appendChild(title);

    const weakTopics = Array.isArray(results.weakTopics) ? results.weakTopics : [];
    if (!weakTopics.length) {
      const emptyMessage = document.createElement("p");
      emptyMessage.className = "weak-topic-success";
      emptyMessage.textContent = "Keine Schwachstellen erkannt – sehr stark!";
      section.appendChild(emptyMessage);
      return;
    }

    const intro = document.createElement("p");
    intro.textContent = "Wiederhole besonders:";
    section.appendChild(intro);

    const list = document.createElement("ul");
    list.className = "weak-topic-list";

    weakTopics.forEach((topic) => {
      const item = document.createElement("li");
      item.className = "weak-topic-item";

      const titleElement = document.createElement("strong");
      titleElement.textContent = topic.title || topic.topic || "Unbekannt";

      const detail = document.createElement("span");
      detail.textContent = `${topic.wrong} Fehler bei ${topic.total} Fragen`;

      item.append(titleElement, detail);
      list.appendChild(item);
    });

    section.appendChild(list);
  }

  function renderIncorrectAnswerReview(results) {
    const review = $("#incorrect-answer-review");
    if (!review) return;

    review.innerHTML = "";

    const title = document.createElement("h4");
    title.id = "incorrect-answer-review-title";
    title.textContent = "Deine Fehler im Überblick";
    review.appendChild(title);

    const incorrectAnswers = Array.isArray(results.incorrectAnswers) ? results.incorrectAnswers : [];
    if (!incorrectAnswers.length) {
      const emptyMessage = document.createElement("p");
      emptyMessage.className = "incorrect-answer-review-empty";
      emptyMessage.textContent = "Stark! Du hast keine Frage falsch beantwortet.";
      review.appendChild(emptyMessage);
      return;
    }

    const list = document.createElement("div");
    list.className = "incorrect-answer-review-list";

    incorrectAnswers.forEach((answer, index) => {
      const card = document.createElement("article");
      card.className = "incorrect-answer-card";
      card.setAttribute("aria-label", `Fehler ${index + 1} von ${incorrectAnswers.length}`);

      const question = document.createElement("h5");
      question.textContent = answer.question || "Frage ohne Text";
      card.appendChild(question);

      appendReviewText(card, "Deine Antwort:", answer.selectedAnswer || "Keine Antwort ausgewählt");
      appendReviewText(card, "Richtige Antwort:", answer.correctAnswer || "Keine richtige Antwort hinterlegt");
      appendReviewText(card, "Erklärung:", answer.explanation || "Zu dieser Frage ist keine Erklärung hinterlegt.");

      list.appendChild(card);
    });

    review.appendChild(list);
  }

  // Ergebnis-Modal: rendert Zusammenfassung und Kategorieauswertung.
  function renderResultsModal(results) {
    const feedback = getResultFeedback(results.percent);
    setText("#quiz-results-title", feedback.title);
    setText("#quiz-results-summary", `Du hast ${results.correct} von ${results.total} Fragen richtig beantwortet. Das entspricht ${results.percent} % Trefferquote.`);
    setText("#quiz-results-message", feedback.message);
    const recommendation = $("#quiz-results-recommendation");
    if (recommendation) recommendation.innerHTML = renderLearningRecommendation(results);
    const stats = $("#quiz-results-stats");
    if (stats) {
      stats.innerHTML = `
        <div class="stat-box"><span>Richtige Antworten</span><strong>${results.correct}</strong><small>von ${results.total} Fragen sicher gelöst</small></div>
        <div class="stat-box"><span>Falsche Antworten</span><strong>${results.wrong}</strong><small>gute Ansatzpunkte zum Wiederholen</small></div>
        <div class="stat-box"><span>Trefferquote</span><strong>${results.percent} %</strong><small>dein aktueller Lernstand</small></div>
      `;
    }
    const categoryStats = $("#quiz-category-stats");
    if (categoryStats) {
      categoryStats.innerHTML = results.categoryResults.map((item) => `
        <div class="category-result">
          <div class="category-result-header">
            <span class="category-result-name">${escapeHtml(item.title)}</span>
            <span class="category-result-score">${item.correct}/${item.total} richtig</span>
            <strong class="category-result-percent">${item.percent} %</strong>
          </div>
          <div class="stat-bar" aria-label="${escapeHtml(item.title)}: ${item.percent} Prozent richtig">
            <div class="stat-bar-fill" style="--bar-width: ${item.percent}%;"></div>
          </div>
        </div>
      `).join("");
      const note = document.createElement("p");
      note.className = "results-note";
      note.textContent = `Stärkster Bereich: ${results.strongestCategory?.title || "Keine"}. Wiederholen: ${results.weakestCategory?.title || "Keine"}.`;
      categoryStats.appendChild(note);
    }
    renderWeakTopicRecommendations(results);
    renderIncorrectAnswerReview(results);
    renderProgressChart(results.history);
  }

  // Ergebnis-Modal: öffnet die Auswertung nach Quizende.
  function showResultsModal() {
    const results = calculateQuizResults();
    saveQuizProgress(results);
    renderResultsModal(results);
    const modal = $("#quiz-results-modal");
    if (modal) modal.classList.remove("is-hidden");
    const closeButton = $("#close-results");
    if (closeButton) closeButton.focus();
  }

  // Ergebnis-Modal: schließt die Auswertung.
  function hideResultsModal() {
    const modal = $("#quiz-results-modal");
    if (modal) modal.classList.add("is-hidden");
  }

  // Ergebnis-Modal: verbindet Schließen, Escape und Wiederholen.
  function initResultsModalControls() {
    const modal = $("#quiz-results-modal");
    const closeButton = $("#close-results");
    const retryButton = $("#retry-same-quiz");
    const chooseButton = $("#choose-new-category");
    if (closeButton) closeButton.addEventListener("click", () => hideResultsModal());
    if (modal) {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) hideResultsModal();
      });
    }
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") hideResultsModal();
    });
    if (retryButton) retryButton.addEventListener("click", () => { hideResultsModal(); startQuiz(); });
    if (chooseButton) chooseButton.addEventListener("click", () => { hideResultsModal(); showQuizStartPanel(); });
  }

  // Chart-Rendering: zeichnet den Antwortverlauf als lokales SVG.
  function renderProgressChart(history) {
    const chart = $("#quiz-progress-chart");
    if (!chart) return;
    if (history.length === 0) {
      chart.textContent = "Keine Verlaufsdaten verfügbar.";
      return;
    }
    const width = 320;
    const height = 140;
    const padding = 20;
    const points = history.map((value, index) => {
      const x = history.length === 1 ? width / 2 : padding + (index * (width - padding * 2)) / (history.length - 1);
      const y = height - padding - (clamp(value, 0, 100) * (height - padding * 2)) / 100;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");
    chart.innerHTML = `
      <svg viewBox="0 0 320 140" role="img" aria-label="Trefferquote im Verlauf">
        <line class="chart-grid-line" x1="20" y1="120" x2="300" y2="120"></line>
        <line class="chart-grid-line" x1="20" y1="70" x2="300" y2="70"></line>
        <line class="chart-grid-line" x1="20" y1="20" x2="300" y2="20"></line>
        <text class="chart-label" x="2" y="124">0%</text>
        <text class="chart-label" x="2" y="74">50%</text>
        <text class="chart-label" x="2" y="24">100%</text>
        <polyline class="chart-line" points="${points}"></polyline>
      </svg>
    `;
  }

  // Ergebnisberechnung: formatiert Prozentwerte ganzzahlig.
  function formatPercent(value) {
    return Math.round(value);
  }

  function renderFlashcard() {
    if (!$("#flashcard-text")) return;
    const cardButton = $("#flashcard");
    if (!data.flashcards.length) {
      setText("#flashcard-progress", "Keine Karteikarten verfügbar");
      setText("#flashcard-side", "Hinweis");
      setText("#flashcard-text", "Aktuell sind keine Karteikarten verfügbar.");
      setText("#flashcard-label", "Hinweis");
      setText("#flashcard-hint", "");
      setProgress("#flashcard-progress-fill", 0);
      setDisabled("#previous-card", true);
      setDisabled("#next-card", true);
      setDisabled("#flashcard", true);
      return;
    }

    flashcardIndex = clamp(flashcardIndex, 0, data.flashcards.length - 1);
    const card = data.flashcards[flashcardIndex];
    const progress = ((flashcardIndex + 1) / data.flashcards.length) * 100;
    setText("#flashcard-progress", `Karte ${flashcardIndex + 1} von ${data.flashcards.length}`);
    const visibleText = flashcardBackVisible ? card.back : card.front;
    setText("#flashcard-side", flashcardBackVisible ? "Antwort sichtbar" : "Frage sichtbar");
    setText("#flashcard-label", flashcardBackVisible ? "Antwort" : "Frage");
    setText("#flashcard-text", visibleText);
    setText("#flashcard-hint", flashcardBackVisible ? "Klicke, um die Frage erneut zu sehen" : "Antwort anzeigen");
    setProgress("#flashcard-progress-fill", progress);
    updateFlashcardProgress();

    if (cardButton) {
      cardButton.classList.toggle("is-showing-back", flashcardBackVisible);
      cardButton.setAttribute("aria-label", flashcardBackVisible ? "Frage anzeigen" : "Antwort anzeigen");
      cardButton.setAttribute("aria-pressed", String(flashcardBackVisible));
    }
  }

  function setFlashcardSide(showBack) {
    flashcardBackVisible = showBack;
    renderFlashcard();
  }

  function showFlashcardAt(nextIndex) {
    if (!data.flashcards.length) return;
    flashcardIndex = (nextIndex + data.flashcards.length) % data.flashcards.length;
    flashcardBackVisible = false;
    storage.set("ap1FlashcardIndex", flashcardIndex);
    renderFlashcard();
  }

  function setProgress(selector, percent) {
    const element = $(selector);
    if (element) element.style.width = `${clamp(percent, 0, 100)}%`;
  }

  function initFlashcardControls() {
    const card = $("#flashcard");
    const previousButton = $("#previous-card");
    const nextButton = $("#next-card");

    if (card) {
      card.addEventListener("click", () => {
        if (!data.flashcards.length) return;
        setFlashcardSide(!flashcardBackVisible);
      });
    }
    if (previousButton) {
      previousButton.addEventListener("click", () => showFlashcardAt(flashcardIndex - 1));
    }
    if (nextButton) {
      nextButton.addEventListener("click", () => showFlashcardAt(flashcardIndex + 1));
    }
  }

  function normalizeData(rawData) {
    const safeData = rawData && typeof rawData === "object" ? rawData : {};
    return {
      chapters: Array.isArray(safeData.chapters) ? safeData.chapters : [],
      quiz: Array.isArray(safeData.quiz) ? safeData.quiz : [],
      quizCategories: Array.isArray(safeData.quizCategories) ? safeData.quizCategories : [],
      flashcards: Array.isArray(safeData.flashcards) ? safeData.flashcards : []
    };
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function setText(selector, text) {
    const element = $(selector);
    if (element) element.textContent = text;
  }

  function setDisabled(selector, disabled) {
    const element = $(selector);
    if (element) element.disabled = disabled;
  }

  function createMessage(text) {
    const message = document.createElement("p");
    message.className = "empty-message card";
    message.textContent = text;
    return message;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
