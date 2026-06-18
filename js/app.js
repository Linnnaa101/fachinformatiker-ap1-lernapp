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
    }
  };

  const data = normalizeData(window.AP1_DATA);
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  // Quiz-Konfiguration: Jeder Durchlauf nutzt maximal 40 zufällige Fragen aus dem gewählten Pool.
  const QUIZ_QUESTION_COUNT = 40;

  // Quiz-State: speichert Auswahl, aktive Fragen und Antwortverlauf für die Statistik.
  let selectedCategory = storage.get("ap1SelectedQuizCategory", "alle");
  let activeQuestions = [];
  let quizAnswers = [];
  let quizAnswered = 0;
  let quizScore = 0;
  let quizIndex = 0;
  let questionLocked = false;
  let flashcardIndex = storage.getInteger("ap1FlashcardIndex", 0, 0, Math.max(data.flashcards.length - 1, 0));
  let flashcardBackVisible = false;

  function init() {
    initNavigation();
    initTheme();
    renderChapters(data.chapters);
    initSearch();
    initQuizCategorySelection();
    initQuizControls();
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

  function initTheme() {
    const toggle = $("#theme-toggle");
    const savedTheme = storage.get("ap1Theme", "light");
    applyTheme(savedTheme);
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      storage.set("ap1Theme", nextTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme === "dark" ? "dark" : "light";
    const toggle = $("#theme-toggle");
    if (toggle) toggle.textContent = theme === "dark" ? "☀️" : "🌙";
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
    if (selectedCategory !== "alle" && !getCategoryById(selectedCategory)) selectedCategory = "alle";
    renderQuizCategoryOptions();
    updateSelectedCategorySummary();
  }

  // Kategorieauswahl: rendert moderne Karten für alle Quizbereiche.
  function renderQuizCategoryOptions() {
    const options = $("#quiz-category-options");
    if (!options) return;
    options.innerHTML = "";
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

  // Kategorieauswahl: speichert die gewählte Kategorie.
  function selectQuizCategory(categoryId) {
    selectedCategory = categoryId;
    storage.set("ap1SelectedQuizCategory", selectedCategory);
    renderQuizCategoryOptions();
    updateSelectedCategorySummary();
  }

  function getCategoryIcon(categoryId) {
    const icons = {
      alle: "🎯",
      "hardware-os": "🖥️",
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
    return null;
  }

  // Kategorieauswahl: filtert Fragen nach Auswahl.
  function getQuestionsForCategory(categoryId) {
    if (categoryId === "alle") return data.quiz;
    return data.quiz.filter((question) => question.category === categoryId);
  }

  // Kategorieauswahl: aktualisiert den Auswahlhinweis.
  function updateSelectedCategorySummary() {
    const category = getCategoryById(selectedCategory);
    const questions = getQuestionsForCategory(selectedCategory);
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
    const questionPool = getQuestionsForCategory(selectedCategory);
    activeQuestions = prepareQuizQuestions(questionPool, QUIZ_QUESTION_COUNT);
    quizAnswers = [];
    quizAnswered = 0;
    quizScore = 0;
    quizIndex = 0;
    questionLocked = false;
    if (activeQuestions.length === 0) {
      setText("#selected-category-summary", "Für diese Kategorie sind noch keine Fragen verfügbar.");
      return;
    }
    const startPanel = $("#quiz-start-panel");
    const quizCard = $("#quiz-card");
    if (startPanel) startPanel.classList.add("is-hidden");
    if (quizCard) quizCard.classList.remove("is-hidden");
    renderQuiz();
  }

  // Quizstart: rendert die aktuelle Frage der aktiven Session.
  function renderQuiz() {
    const questionEl = $("#quiz-question");
    const options = $("#quiz-options");
    if (!questionEl || !options) return;

    questionLocked = false;
    options.innerHTML = "";
    setDisabled("#next-question", true);
    setText("#quiz-score", `Punkte: ${quizScore}`);

    if (!activeQuestions.length) {
      setText("#quiz-progress", "Keine Fragen ausgewählt");
      questionEl.textContent = "Bitte wähle zuerst eine Quiz-Kategorie.";
      setText("#quiz-feedback", "Starte ein Quiz über den Auswahlbereich.");
      return;
    }

    if (quizAnswered >= activeQuestions.length) {
      showResultsModal();
      return;
    }

    quizIndex = clamp(quizAnswered, 0, activeQuestions.length - 1);
    const question = activeQuestions[quizIndex];
    setText("#quiz-progress", `Frage ${quizAnswered + 1} von ${activeQuestions.length}`);
    setText("#quiz-category-label", `Kategorie: ${getCategoryById(question.category)?.title || "Unbekannt"}`);
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
      if (index === question.correctIndex) button.classList.add("correct");
      if (index === selectedIndex && index !== question.correctIndex) button.classList.add("wrong");
    });
    const correct = selectedIndex === question.correctIndex;
    quizAnswers.push({
      questionId: question.id,
      poolQuestionId: question.id,
      category: question.category,
      correct,
      selectedIndex,
      correctIndex: question.correctIndex
    });
    if (correct) quizScore = clamp(quizScore + 1, 0, activeQuestions.length);
    quizAnswered = clamp(quizAnswered + 1, 0, activeQuestions.length);
    setText("#quiz-score", `Punkte: ${quizScore}`);
    setText("#quiz-feedback", `${correct ? "Richtig!" : "Leider falsch."} ${question.explanation}`);
    if (quizAnswered >= activeQuestions.length) {
      setText("#quiz-feedback", `${correct ? "Richtig!" : "Leider falsch."} ${question.explanation} Quiz abgeschlossen: ${quizScore} von ${activeQuestions.length} Punkten.`);
      setDisabled("#next-question", true);
      window.setTimeout(showResultsModal, 600);
      return;
    }
    setDisabled("#next-question", false);
  }

  // Quizstart: verbindet Buttons mit Start, Wechsel und Neustart.
  function initQuizControls() {
    const startButton = $("#start-quiz");
    const nextButton = $("#next-question");
    const restartButton = $("#restart-quiz");
    const changeButton = $("#change-category");

    if (startButton) startButton.addEventListener("click", () => startQuiz());
    if (nextButton) {
      nextButton.addEventListener("click", () => {
        if (quizAnswered < activeQuestions.length) renderQuiz();
      });
    }
    if (restartButton) restartButton.addEventListener("click", () => startQuiz());
    if (changeButton) changeButton.addEventListener("click", () => showQuizStartPanel());
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
    if (options) options.innerHTML = "";
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
    const strongestCategory = categoryResults.reduce((best, item) => (!best || item.percent > best.percent ? item : best), null);
    const weakestCategory = categoryResults.reduce((worst, item) => (!worst || item.percent < worst.percent ? item : worst), null);
    let runningCorrect = 0;
    const history = quizAnswers.map((answer, index) => {
      if (answer.correct) runningCorrect += 1;
      return formatPercent((runningCorrect / (index + 1)) * 100);
    });
    return { total, correct, wrong, percent, categoryResults, strongestCategory, weakestCategory, history };
  }

  // Ergebnis-Modal: rendert Zusammenfassung und Kategorieauswertung.
  function renderResultsModal(results) {
    setText("#quiz-results-summary", `Du hast ${results.correct} von ${results.total} Fragen richtig beantwortet (${results.percent} %).`);
    const stats = $("#quiz-results-stats");
    if (stats) {
      stats.innerHTML = `
        <div class="stat-box"><span>Richtig</span><strong>${results.correct}</strong></div>
        <div class="stat-box"><span>Falsch</span><strong>${results.wrong}</strong></div>
        <div class="stat-box"><span>Trefferquote</span><strong>${results.percent} %</strong></div>
      `;
    }
    const categoryStats = $("#quiz-category-stats");
    if (categoryStats) {
      categoryStats.innerHTML = results.categoryResults.map((item) => `
        <div class="category-result">
          <div class="category-result-header"><span>${escapeHtml(item.title)}</span><span>${item.correct}/${item.total}</span></div>
          <div class="stat-bar"><div class="stat-bar-fill" style="--bar-width: ${item.percent}%;"></div></div>
        </div>
      `).join("");
      const note = document.createElement("p");
      note.className = "results-note";
      note.textContent = `Stärkste Kategorie: ${results.strongestCategory?.title || "Keine"}. Schwächste Kategorie: ${results.weakestCategory?.title || "Keine"}.`;
      categoryStats.appendChild(note);
    }
    renderProgressChart(results.history);
  }

  // Ergebnis-Modal: öffnet die Auswertung nach Quizende.
  function showResultsModal() {
    const results = calculateQuizResults();
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
    if (!data.flashcards.length) {
      setText("#flashcard-progress", "Keine Karteikarten verfügbar");
      setText("#flashcard-side", "Hinweis");
      setText("#flashcard-text", "Aktuell sind keine Karteikarten verfügbar.");
      setDisabled("#next-card", true);
      setDisabled("#flashcard", true);
      return;
    }

    flashcardIndex = clamp(flashcardIndex, 0, data.flashcards.length - 1);
    const card = data.flashcards[flashcardIndex];
    setText("#flashcard-progress", `Karte ${flashcardIndex + 1} von ${data.flashcards.length}`);
    setText("#flashcard-side", flashcardBackVisible ? "Rückseite" : "Vorderseite");
    setText("#flashcard-text", flashcardBackVisible ? card.back : card.front);
  }

  function initFlashcardControls() {
    const card = $("#flashcard");
    const nextButton = $("#next-card");

    if (card) {
      card.addEventListener("click", () => {
        if (!data.flashcards.length) return;
        flashcardBackVisible = !flashcardBackVisible;
        renderFlashcard();
      });
    }
    if (nextButton) {
      nextButton.addEventListener("click", () => {
        if (!data.flashcards.length) return;
        flashcardIndex = (flashcardIndex + 1) % data.flashcards.length;
        flashcardBackVisible = false;
        storage.set("ap1FlashcardIndex", flashcardIndex);
        renderFlashcard();
      });
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
