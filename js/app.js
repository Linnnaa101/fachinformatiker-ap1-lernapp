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

  let quizAnswered = storage.getInteger("ap1QuizAnswered", 0, 0, data.quiz.length);
  let quizScore = storage.getInteger("ap1QuizScore", 0, 0, quizAnswered);
  let quizIndex = clamp(quizAnswered, 0, Math.max(data.quiz.length - 1, 0));
  let questionLocked = false;
  let flashcardIndex = storage.getInteger("ap1FlashcardIndex", 0, 0, Math.max(data.flashcards.length - 1, 0));
  let flashcardBackVisible = false;

  function init() {
    initNavigation();
    initTheme();
    renderChapters(data.chapters);
    initSearch();
    renderQuiz();
    initQuizControls();
    renderFlashcard();
    initFlashcardControls();
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

  function renderQuiz() {
    const questionEl = $("#quiz-question");
    const options = $("#quiz-options");
    if (!questionEl || !options) return;

    questionLocked = false;
    options.innerHTML = "";
    setDisabled("#next-question", true);
    setText("#quiz-score", `Punkte: ${quizScore}`);

    if (!data.quiz.length) {
      setText("#quiz-progress", "Keine Fragen verfügbar");
      questionEl.textContent = "Aktuell sind keine Quizfragen verfügbar.";
      setText("#quiz-feedback", "Bitte ergänze Fragen in data/lerninhalte.js.");
      return;
    }

    if (quizAnswered >= data.quiz.length) {
      quizIndex = data.quiz.length - 1;
      setText("#quiz-progress", `Quiz abgeschlossen (${data.quiz.length} von ${data.quiz.length})`);
      questionEl.textContent = "Quiz abgeschlossen";
      setText("#quiz-feedback", `Quiz abgeschlossen: ${quizScore} von ${data.quiz.length} Punkten.`);
      return;
    }

    quizIndex = clamp(quizAnswered, 0, data.quiz.length - 1);
    const question = data.quiz[quizIndex];
    setText("#quiz-progress", `Frage ${quizAnswered + 1} von ${data.quiz.length}`);
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

  function answerQuestion(selectedIndex) {
    if (questionLocked || quizAnswered >= data.quiz.length) return;
    questionLocked = true;
    const question = data.quiz[quizIndex];
    const buttons = $$(".option-button");
    buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === question.correctIndex) button.classList.add("correct");
      if (index === selectedIndex && index !== question.correctIndex) button.classList.add("wrong");
    });
    const correct = selectedIndex === question.correctIndex;
    if (correct) quizScore = clamp(quizScore + 1, 0, data.quiz.length);
    quizAnswered = clamp(quizAnswered + 1, 0, data.quiz.length);
    storage.set("ap1QuizScore", quizScore);
    storage.set("ap1QuizAnswered", quizAnswered);
    setText("#quiz-score", `Punkte: ${quizScore}`);
    setText("#quiz-feedback", `${correct ? "Richtig!" : "Leider falsch."} ${question.explanation}`);
    if (quizAnswered >= data.quiz.length) {
      setText("#quiz-feedback", `${correct ? "Richtig!" : "Leider falsch."} ${question.explanation} Quiz abgeschlossen: ${quizScore} von ${data.quiz.length} Punkten.`);
    }
    setDisabled("#next-question", quizAnswered >= data.quiz.length);
  }

  function initQuizControls() {
    const nextButton = $("#next-question");
    const restartButton = $("#restart-quiz");

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        if (quizAnswered < data.quiz.length) renderQuiz();
      });
    }
    if (restartButton) {
      restartButton.addEventListener("click", () => {
        quizIndex = 0;
        quizScore = 0;
        quizAnswered = 0;
        questionLocked = false;
        storage.set("ap1QuizScore", quizScore);
        storage.set("ap1QuizAnswered", quizAnswered);
        setText("#quiz-feedback", "");
        renderQuiz();
      });
    }
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
