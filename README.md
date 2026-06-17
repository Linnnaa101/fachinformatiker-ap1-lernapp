# AP1 Lernseite – Fachinformatiker Anwendungsentwicklung

Eine statische, responsive Lernseite zur Vorbereitung auf die AP1-Prüfung für Fachinformatikerinnen und Fachinformatiker der Fachrichtung Anwendungsentwicklung. Die App läuft ohne Frameworks, ohne npm und ohne Build-System direkt im Browser.

**Live-Demo:** https://linnnaa101.github.io/fachinformatiker-ap1-lernapp/

## Funktionen

- Lernkapitel zu wichtigen AP1-Themen wie Netzwerke, SQL, OOP, UML, Projektmanagement und DSGVO
- Dynamisches Rendering der Inhalte aus getrennten Datendateien unter `data/`
- Suche über Kapitel, Stichpunkte und Merksätze
- Umschaltbarer Dark Mode mit Speicherung in `localStorage`
- Multiple-Choice-Quiz mit 800 AP1-typischen Poolfragen, Kategorieauswahl, 40 zufälligen Fragen pro Durchlauf, Sofortfeedback und detaillierter Ergebnisstatistik
- Jede Fachkategorie enthält 100 Poolfragen; „Alle Themen“ zieht 40 zufällige Fragen aus allen 800 Poolfragen
- Antwortoptionen werden bei jedem Quizstart neu gemischt, sodass die richtige Antwort nicht fest an einer Position steht
- Ergebnis-Popup mit Gesamtpunktzahl, Trefferquote, Kategorieauswertung und visueller Verlaufskurve
- Interaktive Karteikarten mit Fortschrittsanzeige
- Speicherung von Dark Mode, Quiz-Kategorie und letzter Karteikarte
- Mobile-first Design mit CSS-Variablen, Karten-Optik und guter Lesbarkeit

## Ordnerstruktur

```text
.
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── app.js
├── data/
│   ├── lerninhalte.js
│   ├── chapters.js
│   ├── flashcards.js
│   ├── quiz-categories.js
│   └── quiz/
│       ├── hardware-os.js
│       ├── netzwerke.js
│       ├── it-sicherheit.js
│       ├── datenbanken-sql.js
│       ├── softwareentwicklung.js
│       ├── oop-uml.js
│       ├── projektmanagement.js
│       └── datenschutz-dsgvo.js
└── assets/
    └── favicon.svg
```

## Lokal öffnen

1. Repository herunterladen oder klonen.
2. Die Datei `index.html` direkt im Browser öffnen.
3. Optional kann ein lokaler statischer Server verwendet werden, zum Beispiel mit Python:

```bash
python3 -m http.server 8000
```

Danach ist die Seite unter `http://localhost:8000` erreichbar.

## Veröffentlichung über GitHub Pages

1. Änderungen in den `main`-Branch pushen.
2. Im GitHub-Repository **Settings → Pages** öffnen.
3. Als Quelle **Deploy from a branch** wählen.
4. Branch `main` und Ordner `/ (root)` auswählen.
5. Speichern. Nach kurzer Zeit stellt GitHub Pages die statische Seite bereit.

## Qualitätssicherung

Die App benötigt weiterhin kein npm-Projekt und keinen Build-Step. Für lokale Prüfungen reichen die folgenden Node-Kommandos:

```bash
node --check data/lerninhalte.js
node --check js/app.js
node scripts/validate-data.mjs
```

GitHub Actions führt diese Checks bei Pushes und Pull Requests auf `main` automatisch aus.

## Technische Hinweise

- Es werden keine externen CDN-Dateien geladen.
- Alle Inhalte liegen lokal im Repository.
- Die Daten werden in getrennten Dateien gepflegt und in `data/lerninhalte.js` zum globalen Objekt `window.AP1_DATA` zusammengeführt.
- Das Quiz nutzt Kategorien und Frage-IDs, damit Ergebnisse pro Lernbereich ausgewertet werden können.
- Die Ergebnisstatistik wird ohne externe Chart-Bibliothek mit lokalem SVG gerendert.
- Jede Fachkategorie im Quiz enthält exakt 100 Fragen mit eindeutigen IDs von `001` bis `100`.
- Die Auswahl `Alle Themen` ist keine eigene Fachkategorie, sondern nutzt automatisch alle Fragen aus `window.AP1_DATA.quiz`.
- Quizfragen speichern `correctAnswer` und `wrongAnswers`; `options` und `correctIndex` werden erst temporär beim Quizstart erzeugt.
- Pro Quizdurchlauf werden maximal 40 Fragen ohne Wiederholung aus dem gewählten Fragenpool gezogen.
- Quizfragen liegen nach Kategorie getrennt unter `data/quiz/`.
- Jede Quizfrage enthält ein `topic`, damit Unterthemen später genauer ausgewertet werden können.
- Der Validator verhindert sichtbare Fragennummern wie `Frage 047` im Fragetext.
