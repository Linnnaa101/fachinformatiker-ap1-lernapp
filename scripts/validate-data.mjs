const errors = [];
const fail = (message) => errors.push(message);

global.window = {};
await import(new URL("../data/lerninhalte.js", import.meta.url));

const data = global.window.AP1_DATA;

if (!data || typeof data !== "object") {
  fail("window.AP1_DATA existiert nicht oder ist kein Objekt.");
} else {
  validateArray("chapters");
  validateArray("quiz");
  validateArray("quizCategories");
  validateArray("flashcards");

  if (Array.isArray(data.chapters)) validateChapters(data.chapters);
  if (Array.isArray(data.quiz)) validateQuiz(data.quiz);
  if (Array.isArray(data.quizCategories)) validateQuizCategories(data.quizCategories);
  if (Array.isArray(data.quiz) && Array.isArray(data.quizCategories)) validateQuizCategoryLinks(data.quiz, data.quizCategories);
  if (Array.isArray(data.flashcards)) validateFlashcards(data.flashcards);
}

if (errors.length) {
  console.error("Datenvalidierung fehlgeschlagen:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Datenvalidierung erfolgreich.");

function validateArray(key) {
  if (!Array.isArray(data[key])) fail(`window.AP1_DATA.${key} muss ein Array sein.`);
}

function validateChapters(chapters) {
  const ids = new Set();
  chapters.forEach((chapter, index) => {
    const label = `chapters[${index}]`;
    if (!isNonEmptyString(chapter.id)) fail(`${label}.id muss ein nicht-leerer String sein.`);
    if (ids.has(chapter.id)) fail(`${label}.id ist doppelt vergeben: ${chapter.id}`);
    ids.add(chapter.id);
    if (!isNonEmptyString(chapter.title)) fail(`${label}.title muss ein nicht-leerer String sein.`);
    if (!isNonEmptyString(chapter.description)) fail(`${label}.description muss ein nicht-leerer String sein.`);
    if (!Array.isArray(chapter.bullets)) fail(`${label}.bullets muss ein Array sein.`);
    if (!isNonEmptyString(chapter.mnemonic)) fail(`${label}.mnemonic muss ein nicht-leerer String sein.`);
  });
}

// Kategorievalidierung: prüft IDs und Pflichtfelder.
function validateQuizCategories(categories) {
  const ids = new Set();
  categories.forEach((category, index) => {
    const label = `quizCategories[${index}]`;
    if (!isNonEmptyString(category.id)) fail(`${label}.id muss ein nicht-leerer String sein.`);
    if (ids.has(category.id)) fail(`${label}.id ist doppelt vergeben: ${category.id}`);
    ids.add(category.id);
    if (!isNonEmptyString(category.title)) fail(`${label}.title muss ein nicht-leerer String sein.`);
    if (!isNonEmptyString(category.description)) fail(`${label}.description muss ein nicht-leerer String sein.`);
  });
  if (!ids.has("alle")) fail('window.AP1_DATA.quizCategories muss die Kategorie "alle" enthalten.');
}

// Quizvalidierung: prüft Umfang, Pflichtfelder und die neue Antwortstruktur.
function validateQuiz(quiz) {
  if (quiz.length !== 800) fail(`window.AP1_DATA.quiz muss genau 800 Fragen enthalten, aktuell: ${quiz.length}.`);
  const ids = new Set();
  const questionTexts = new Set();
  const difficulties = new Set(["leicht", "mittel", "schwer"]);
  const requiredFields = ["id", "category", "difficulty", "question", "correctAnswer", "wrongAnswers", "explanation"];
  const difficultyCounts = new Map();
  quiz.forEach((question, index) => {
    const label = `quiz[${index}]`;
    // Frageobjektprüfung: Die Daten speichern keine Antwortposition; options und correctIndex entstehen erst temporär beim Quizstart.
    const fields = Object.keys(question);
    requiredFields.forEach((field) => {
      if (!fields.includes(field)) fail(`${label} muss das Feld ${field} enthalten.`);
    });
    fields.forEach((field) => {
      if (!requiredFields.includes(field)) fail(`${label} enthält das unerlaubte Feld ${field}.`);
    });

    if (!isNonEmptyString(question.id)) fail(`${label}.id muss ein nicht-leerer String sein.`);
    if (ids.has(question.id)) fail(`${label}.id ist doppelt vergeben: ${question.id}`);
    ids.add(question.id);
    if (!isNonEmptyString(question.category)) fail(`${label}.category muss ein nicht-leerer String sein.`);
    if (!isNonEmptyString(question.difficulty)) fail(`${label}.difficulty muss ein nicht-leerer String sein.`);
    if (isNonEmptyString(question.difficulty) && !difficulties.has(question.difficulty)) fail(`${label}.difficulty muss leicht, mittel oder schwer sein.`);
    if (!isNonEmptyString(question.question)) fail(`${label}.question muss ein nicht-leerer String sein.`);
    if (isNonEmptyString(question.question)) {
      if (questionTexts.has(question.question)) fail(`${label}.question ist doppelt vergeben: ${question.question}`);
      questionTexts.add(question.question);
    }
    if (isNonEmptyString(question.category) && isNonEmptyString(question.difficulty) && difficulties.has(question.difficulty)) {
      const counts = difficultyCounts.get(question.category) || { leicht: 0, mittel: 0, schwer: 0 };
      counts[question.difficulty] += 1;
      difficultyCounts.set(question.category, counts);
    }
    if (!isNonEmptyString(question.correctAnswer)) fail(`${label}.correctAnswer muss ein nicht-leerer String sein.`);

    if (!Array.isArray(question.wrongAnswers) || question.wrongAnswers.length !== 3) {
      fail(`${label}.wrongAnswers muss genau drei falsche Antworten enthalten.`);
    } else {
      const wrongAnswerSet = new Set();
      question.wrongAnswers.forEach((answer, answerIndex) => {
        if (!isNonEmptyString(answer)) fail(`${label}.wrongAnswers[${answerIndex}] muss ein nicht-leerer String sein.`);
        if (wrongAnswerSet.has(answer)) fail(`${label}.wrongAnswers enthält eine doppelte Antwort: ${answer}`);
        wrongAnswerSet.add(answer);
      });
      if (wrongAnswerSet.has(question.correctAnswer)) fail(`${label}.correctAnswer darf nicht zusätzlich in wrongAnswers vorkommen.`);
    }
    if (!isNonEmptyString(question.explanation)) fail(`${label}.explanation muss ein nicht-leerer String sein.`);
  });

  // Schwierigkeitsprüfung: jede Fachkategorie muss die vorgegebene Verteilung erfüllen.
  difficultyCounts.forEach((counts, categoryId) => {
    if (counts.leicht !== 35) fail(`Kategorie ${categoryId} muss genau 35 leichte Fragen haben, aktuell: ${counts.leicht}.`);
    if (counts.mittel !== 45) fail(`Kategorie ${categoryId} muss genau 45 mittlere Fragen haben, aktuell: ${counts.mittel}.`);
    if (counts.schwer !== 20) fail(`Kategorie ${categoryId} muss genau 20 schwere Fragen haben, aktuell: ${counts.schwer}.`);
  });
}

// Kategorie-/ID-Prüfung: stellt die Verbindung zwischen Fragen, Kategorien und ID-Reihenfolge sicher.
function validateQuizCategoryLinks(quiz, categories) {
  const categoryIds = categories.filter((category) => category.id !== "alle").map((category) => category.id);
  const categoryIdSet = new Set(categoryIds);
  const counts = new Map(categoryIds.map((id) => [id, 0]));
  const idsByCategory = new Map(categoryIds.map((id) => [id, new Set()]));

  quiz.forEach((question, index) => {
    const label = `quiz[${index}]`;

    if (!categoryIdSet.has(question.category)) {
      fail(`${label}.category verweist auf keine vorhandene Fachkategorie: ${question.category}`);
      return;
    }

    counts.set(question.category, counts.get(question.category) + 1);
    idsByCategory.get(question.category).add(question.id);

    const expectedPrefix = `${question.category}-`;
    if (!question.id.startsWith(expectedPrefix)) {
      fail(`${label}.id muss mit ${expectedPrefix} beginnen.`);
    }

    const suffix = question.id.slice(expectedPrefix.length);
    if (!/^\d{3}$/.test(suffix)) {
      fail(`${label}.id muss mit einer dreistelligen Nummer enden.`);
    }
  });

  categoryIds.forEach((categoryId) => {
    const count = counts.get(categoryId) || 0;
    if (count !== 100) {
      fail(`Kategorie ${categoryId} muss genau 100 Fragen haben, aktuell: ${count}.`);
    }

    const ids = idsByCategory.get(categoryId);
    for (let number = 1; number <= 100; number += 1) {
      const expectedId = `${categoryId}-${String(number).padStart(3, "0")}`;
      if (!ids.has(expectedId)) {
        fail(`Kategorie ${categoryId} muss die Frage-ID ${expectedId} enthalten.`);
      }
    }
  });
}

function validateFlashcards(flashcards) {
  flashcards.forEach((card, index) => {
    const label = `flashcards[${index}]`;
    if (!isNonEmptyString(card.front)) fail(`${label}.front muss ein nicht-leerer String sein.`);
    if (!isNonEmptyString(card.back)) fail(`${label}.back muss ein nicht-leerer String sein.`);
  });
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}
