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
  validateArray("flashcards");

  if (Array.isArray(data.chapters)) validateChapters(data.chapters);
  if (Array.isArray(data.quiz)) validateQuiz(data.quiz);
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

function validateQuiz(quiz) {
  quiz.forEach((question, index) => {
    const label = `quiz[${index}]`;
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
