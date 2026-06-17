(function () {
  "use strict";

  // Datenaggregation: führt die getrennten Datenquellen zu AP1_DATA zusammen.
  const quiz = [
    ...(window.AP1_QUIZ_HARDWARE_OS || []),
    ...(window.AP1_QUIZ_NETZWERKE || []),
    ...(window.AP1_QUIZ_IT_SICHERHEIT || []),
    ...(window.AP1_QUIZ_DATENBANKEN_SQL || []),
    ...(window.AP1_QUIZ_SOFTWAREENTWICKLUNG || []),
    ...(window.AP1_QUIZ_OOP_UML || []),
    ...(window.AP1_QUIZ_PROJEKTMANAGEMENT || []),
    ...(window.AP1_QUIZ_DATENSCHUTZ_DSGVO || [])
  ];

  window.AP1_DATA = {
    chapters: window.AP1_CHAPTERS || [],
    quizCategories: window.AP1_QUIZ_CATEGORIES || [],
    quiz,
    flashcards: window.AP1_FLASHCARDS || []
  };
})();
