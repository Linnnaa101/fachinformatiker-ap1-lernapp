# AP1 Learning App – Fachinformatiker Application Development

A static, browser-based learning app for preparing for the German AP1 exam for Fachinformatikerinnen and Fachinformatiker. The app runs fully in the browser, requires no backend, and is suitable for GitHub Pages or any other static hosting provider.

**Live demo:** https://linnnaa101.github.io/fachinformatiker-ap1-lernapp/

## Features

- 800 validated AP1 quiz questions across 8 topic categories
- Category selection and selectable quiz length: 10, 25, or 40 questions
- Randomized answer order for each quiz run
- Result modal with score, percentage, category details, and chart
- Result action bar for choosing the next learning step
- Incorrect-answer review after a quiz
- Incorrect-question retry mode for focused practice
- Category-qualified incorrect-question tracking to avoid ID collisions between categories
- Weak-topic recommendations with direct practice actions
- Local learning progress dashboard
- Flashcards for quick repetition
- Compact onboarding guide
- Mobile-friendly layout and responsive UI polish

## Quiz Categories

- Hardware & OS
- Netzwerke
- IT-Sicherheit
- Datenbanken & SQL
- Softwareentwicklung
- OOP & UML
- Projektmanagement
- Datenschutz & DSGVO

## Project Structure

```text
index.html
css/style.css
js/app.js
data/
data/quiz/
scripts/validate-data.mjs
.github/workflows/validate.yml
```

## Local Usage

Open `index.html` directly in a browser, or serve the repository with any simple static server. No `npm install`, backend, or build step is required.

Example static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Data Model

Quiz data is split into category files under `data/quiz/`. The category data and learning content are aggregated through `data/lerninhalte.js` into the browser data model used by the app.

## Persistence

The app stores local learning progress and incorrect-question tracking in browser `localStorage`. Incorrect questions are tracked with category-qualified IDs so questions from different categories cannot collide when they share the same numeric ID.

## Validation

Run these checks before committing changes:

```bash
node --check js/app.js
node --check data/lerninhalte.js
node scripts/validate-data.mjs
```

The GitHub Actions validation workflow in `.github/workflows/validate.yml` runs the validation checks for pushes and pull requests.

## GitHub Pages

The app is intended for GitHub Pages and other static hosting environments. Deploy the repository root as a static site; no server-side runtime is needed.
