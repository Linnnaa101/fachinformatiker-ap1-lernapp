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

// Quizvalidierung: prüft Umfang, Pflichtfelder und Antwortdaten.
function validateQuiz(quiz) {
  if (quiz.length !== 40) fail(`window.AP1_DATA.quiz muss genau 40 Fragen enthalten, aktuell: ${quiz.length}.`);
  const ids = new Set();
  const difficulties = new Set(["leicht", "mittel", "schwer"]);
  quiz.forEach((question, index) => {
    const label = `quiz[${index}]`;
    if (!isNonEmptyString(question.id)) fail(`${label}.id muss ein nicht-leerer String sein.`);
    if (ids.has(question.id)) fail(`${label}.id ist doppelt vergeben: ${question.id}`);
    ids.add(question.id);
    if (!isNonEmptyString(question.category)) fail(`${label}.category muss ein nicht-leerer String sein.`);
    if (!isNonEmptyString(question.difficulty)) fail(`${label}.difficulty muss ein nicht-leerer String sein.`);
    if (isNonEmptyString(question.difficulty) && !difficulties.has(question.difficulty)) fail(`${label}.difficulty muss leicht, mittel oder schwer sein.`);
    if (!isNonEmptyString(question.question)) fail(`${label}.question muss ein nicht-leerer String sein.`);
    if (!Array.isArray(question.options) || question.options.length < 2) {
      fail(`${label}.options muss mindestens zwei Antworten enthalten.`);
    }
    if (!Number.isInteger(question.correctIndex) || !Array.isArray(question.options) || question.correctIndex < 0 || question.correctIndex >= question.options.length) {
      fail(`${label}.correctIndex muss auf eine vorhandene Antwort zeigen.`);
    }
    if (!isNonEmptyString(question.explanation)) fail(`${label}.explanation muss ein nicht-leerer String sein.`);
  });
}

// Quiz-Kategorieprüfung: stellt die Verbindung zwischen Fragen und Kategorien sicher.
function validateQuizCategoryLinks(quiz, categories) {
  const categoryIds = new Set(categories.filter((category) => category.id !== "alle").map((category) => category.id));
  const counts = new Map(Array.from(categoryIds, (id) => [id, 0]));
  quiz.forEach((question, index) => {
    if (!categoryIds.has(question.category)) fail(`quiz[${index}].category verweist auf keine vorhandene Kategorie: ${question.category}`);
    if (counts.has(question.category)) counts.set(question.category, counts.get(question.category) + 1);
  });
  categories.filter((category) => category.id !== "alle").forEach((category) => {
    const count = counts.get(category.id) || 0;
    if (count !== 5) fail(`Kategorie ${category.id} muss genau 5 Fragen haben, aktuell: ${count}.`);
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
