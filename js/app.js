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
    set(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.warn("localStorage konnte nicht gespeichert werden:", error);
      }
    }
  };

  const data = window.AP1_DATA || { chapters: [], quiz: [], flashcards: [] };
  const $ = (selector) => document.querySelector(selector);

  let quizIndex = Math.min(storage.get("ap1QuizAnswered", 0), data.quiz.length - 1);
  let quizScore = storage.get("ap1QuizScore", 0);
  let quizAnswered = storage.get("ap1QuizAnswered", 0);
  let questionLocked = false;
  let flashcardIndex = Math.min(storage.get("ap1FlashcardIndex", 0), data.flashcards.length - 1);
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
    const savedTheme = storage.get("ap1Theme", "light");
    applyTheme(savedTheme);
    $("#theme-toggle").addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      storage.set("ap1Theme", nextTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme === "dark" ? "dark" : "light";
    $("#theme-toggle").textContent = theme === "dark" ? "☀️" : "🌙";
  }

  function renderChapters(chapters) {
    const container = $("#chapters-container");
    container.innerHTML = "";
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
    $("#chapter-search").addEventListener("input", (event) => {
      const term = event.target.value.trim().toLowerCase();
      const filtered = !term ? data.chapters : data.chapters.filter((chapter) => {
        const haystack = [chapter.title, chapter.description, chapter.mnemonic, ...chapter.bullets].join(" ").toLowerCase();
        return haystack.includes(term);
      });
      renderChapters(filtered);
      $("#search-status").textContent = term ? `${filtered.length} von ${data.chapters.length} Kapiteln gefunden.` : "Alle Kapitel werden angezeigt.";
    });
  }

  function renderQuiz() {
    if (!data.quiz.length) return;
    if (quizAnswered >= data.quiz.length) quizIndex = data.quiz.length - 1;
    const question = data.quiz[quizIndex];
    questionLocked = false;
    $("#quiz-progress").textContent = `Frage ${Math.min(quizAnswered + 1, data.quiz.length)} von ${data.quiz.length}`;
    $("#quiz-score").textContent = `Punkte: ${quizScore}`;
    $("#quiz-question").textContent = question.question;
    $("#quiz-feedback").textContent = quizAnswered >= data.quiz.length ? "Quiz abgeschlossen. Starte neu, um erneut zu üben." : "";
    $("#next-question").disabled = true;
    const options = $("#quiz-options");
    options.innerHTML = "";
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-button";
      button.textContent = option;
      button.disabled = quizAnswered >= data.quiz.length;
      button.addEventListener("click", () => answerQuestion(index));
      options.appendChild(button);
    });
  }

  function answerQuestion(selectedIndex) {
    if (questionLocked || quizAnswered >= data.quiz.length) return;
    questionLocked = true;
    const question = data.quiz[quizIndex];
    const buttons = document.querySelectorAll(".option-button");
    buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === question.correctIndex) button.classList.add("correct");
      if (index === selectedIndex && index !== question.correctIndex) button.classList.add("wrong");
    });
    const correct = selectedIndex === question.correctIndex;
    if (correct) quizScore += 1;
    quizAnswered += 1;
    storage.set("ap1QuizScore", quizScore);
    storage.set("ap1QuizAnswered", quizAnswered);
    $("#quiz-score").textContent = `Punkte: ${quizScore}`;
    $("#quiz-feedback").textContent = `${correct ? "Richtig!" : "Leider falsch."} ${question.explanation}`;
    $("#next-question").disabled = quizAnswered >= data.quiz.length;
  }

  function initQuizControls() {
    $("#next-question").addEventListener("click", () => {
      if (quizAnswered < data.quiz.length) {
        quizIndex = quizAnswered;
        renderQuiz();
      }
    });
    $("#restart-quiz").addEventListener("click", () => {
      quizIndex = 0;
      quizScore = 0;
      quizAnswered = 0;
      storage.set("ap1QuizScore", quizScore);
      storage.set("ap1QuizAnswered", quizAnswered);
      renderQuiz();
    });
  }

  function renderFlashcard() {
    if (!data.flashcards.length) return;
    const card = data.flashcards[flashcardIndex];
    $("#flashcard-progress").textContent = `Karte ${flashcardIndex + 1} von ${data.flashcards.length}`;
    $("#flashcard-side").textContent = flashcardBackVisible ? "Rückseite" : "Vorderseite";
    $("#flashcard-text").textContent = flashcardBackVisible ? card.back : card.front;
  }

  function initFlashcardControls() {
    $("#flashcard").addEventListener("click", () => {
      flashcardBackVisible = !flashcardBackVisible;
      renderFlashcard();
    });
    $("#next-card").addEventListener("click", () => {
      flashcardIndex = (flashcardIndex + 1) % data.flashcards.length;
      flashcardBackVisible = false;
      storage.set("ap1FlashcardIndex", flashcardIndex);
      renderFlashcard();
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
