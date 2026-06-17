// Datenbanken & SQL: 100 hochwertige Poolfragen für das Quiz.
window.AP1_QUIZ_DATENBANKEN_SQL = [
  {
    id: "datenbanken-sql-001",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche SQL-Anweisung wird verwendet, um Daten aus einer Tabelle abzufragen?",
    correctAnswer: "SELECT",
    wrongAnswers: ["INSERT", "UPDATE", "DELETE"],
    explanation: "SELECT liest Daten aus einer oder mehreren Tabellen."
  },
  {
    id: "datenbanken-sql-002",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche SQL-Klausel filtert Datensätze nach einer Bedingung?",
    correctAnswer: "WHERE",
    wrongAnswers: ["ORDER BY", "INSERT", "CREATE"],
    explanation: "WHERE schränkt das Ergebnis einer Abfrage auf passende Datensätze ein."
  },
  {
    id: "datenbanken-sql-003",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche SQL-Klausel sortiert das Ergebnis einer Abfrage?",
    correctAnswer: "ORDER BY",
    wrongAnswers: ["WHERE", "VALUES", "DROP"],
    explanation: "ORDER BY sortiert Ergebniszeilen nach einer oder mehreren Spalten."
  },
  {
    id: "datenbanken-sql-004",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche Sortierreihenfolge bedeutet `ASC` in SQL?",
    correctAnswer: "Aufsteigend",
    wrongAnswers: ["Absteigend", "Zufällig", "Nur eindeutige Werte"],
    explanation: "ASC steht für ascending und sortiert Werte aufsteigend."
  },
  {
    id: "datenbanken-sql-005",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche Sortierreihenfolge bedeutet `DESC` in SQL?",
    correctAnswer: "Absteigend",
    wrongAnswers: ["Aufsteigend", "Alphabetisch ohne Zahlen", "Nur Nullwerte"],
    explanation: "DESC steht für descending und sortiert Werte absteigend."
  },
  {
    id: "datenbanken-sql-006",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Wozu dient `DISTINCT` in einer SELECT-Abfrage?",
    correctAnswer: "Doppelte Ergebniswerte werden entfernt.",
    wrongAnswers: ["Alle Datensätze werden gelöscht.", "Die Tabelle wird umbenannt.", "Neue Datensätze werden eingefügt."],
    explanation: "DISTINCT gibt gleiche Ergebniszeilen nur einmal zurück."
  },
  {
    id: "datenbanken-sql-007",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche Bedingung findet Datensätze, bei denen die Spalte `ort` den Wert `Bonn` hat?",
    correctAnswer: "WHERE ort = 'Bonn'",
    wrongAnswers: ["ORDER BY ort = 'Bonn'", "SELECT ort = 'Bonn'", "INSERT ort = 'Bonn'"],
    explanation: "Mit WHERE wird die Filterbedingung für Zeilen formuliert."
  },
  {
    id: "datenbanken-sql-008",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche SQL-Anweisung gibt nur die Spalte `name` aus der Tabelle `kunden` zurück?",
    correctAnswer: "SELECT name FROM kunden;",
    wrongAnswers: ["SELECT * FROM name;", "FROM kunden SELECT name;", "GET name FROM kunden;"],
    explanation: "Nach SELECT stehen die gewünschten Spalten, nach FROM die Tabelle."
  },
  {
    id: "datenbanken-sql-009",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche SQL-Anweisung gibt alle Spalten einer Tabelle zurück?",
    correctAnswer: "SELECT * FROM tabelle;",
    wrongAnswers: ["SELECT ALL COLUMNS tabelle;", "SHOW * WHERE tabelle;", "GET ALL FROM tabelle;"],
    explanation: "Das Sternchen steht in SELECT-Abfragen für alle Spalten."
  },
  {
    id: "datenbanken-sql-010",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche SQL-Bedingung prüft, ob ein Wert zwischen 10 und 20 liegt?",
    correctAnswer: "BETWEEN 10 AND 20",
    wrongAnswers: ["IN 10 TO 20", "LIKE 10 AND 20", "ORDER 10 UNTIL 20"],
    explanation: "BETWEEN prüft, ob ein Wert innerhalb eines Bereichs liegt."
  },
  {
    id: "datenbanken-sql-011",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche SQL-Klausel prüft, ob ein Wert in einer Liste enthalten ist?",
    correctAnswer: "IN",
    wrongAnswers: ["BETWEEN", "ORDER BY", "ALTER"],
    explanation: "IN vergleicht einen Wert mit mehreren möglichen Werten."
  },
  {
    id: "datenbanken-sql-012",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche SQL-Klausel wird häufig für einfache Textmuster verwendet?",
    correctAnswer: "LIKE",
    wrongAnswers: ["DROP", "COMMIT", "GRANT"],
    explanation: "LIKE ermöglicht Mustervergleiche, zum Beispiel mit Prozentzeichen als Platzhalter."
  },
  {
    id: "datenbanken-sql-013",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche WHERE-Bedingung findet Werte, die nicht leer beziehungsweise nicht unbekannt sind?",
    correctAnswer: "IS NOT NULL",
    wrongAnswers: ["= NULL", "NOT EMPTY", "HAS VALUE"],
    explanation: "NULL wird in SQL mit IS NULL oder IS NOT NULL geprüft."
  },
  {
    id: "datenbanken-sql-014",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche WHERE-Bedingung findet Datensätze, bei denen `preis` größer als 100 ist?",
    correctAnswer: "WHERE preis > 100",
    wrongAnswers: ["WHERE preis => 100", "ORDER BY preis > 100", "SELECT preis > 100"],
    explanation: "Der Vergleichsoperator größer als wird in SQL mit > geschrieben."
  },
  {
    id: "datenbanken-sql-015",
    category: "datenbanken-sql",
    topic: "select-where-order",
    difficulty: "leicht",
    question: "Welche SQL-Anweisung gibt Kunden nach Namen aufsteigend sortiert aus?",
    correctAnswer: "SELECT * FROM kunden ORDER BY name ASC;",
    wrongAnswers: ["SELECT * FROM kunden WHERE name ASC;", "ORDER kunden BY name ASC;", "SELECT ASC name FROM kunden;"],
    explanation: "ORDER BY sortiert die Ergebnismenge, ASC steht für aufsteigend."
  },
  {
    id: "datenbanken-sql-016",
    category: "datenbanken-sql",
    topic: "insert-update-delete",
    difficulty: "leicht",
    question: "Welche SQL-Anweisung fügt einen neuen Datensatz in eine Tabelle ein?",
    correctAnswer: "INSERT",
    wrongAnswers: ["UPDATE", "DELETE", "SELECT"],
    explanation: "INSERT wird verwendet, um neue Datensätze anzulegen."
  },
  {
    id: "datenbanken-sql-017",
    category: "datenbanken-sql",
    topic: "insert-update-delete",
    difficulty: "leicht",
    question: "Welche SQL-Anweisung ändert vorhandene Datensätze?",
    correctAnswer: "UPDATE",
    wrongAnswers: ["INSERT", "DROP", "CREATE"],
    explanation: "UPDATE verändert bestehende Datensätze in einer Tabelle."
  },
  {
    id: "datenbanken-sql-018",
    category: "datenbanken-sql",
    topic: "insert-update-delete",
    difficulty: "leicht",
    question: "Welche SQL-Anweisung entfernt Datensätze aus einer Tabelle?",
    correctAnswer: "DELETE",
    wrongAnswers: ["SELECT", "ALTER", "ORDER BY"],
    explanation: "DELETE löscht Datensätze, die optional durch WHERE eingeschränkt werden."
  },
  {
    id: "datenbanken-sql-019",
    category: "datenbanken-sql",
    topic: "insert-update-delete",
    difficulty: "leicht",
    question: "Warum ist eine WHERE-Klausel bei UPDATE-Anweisungen wichtig?",
    correctAnswer: "Sie begrenzt, welche Datensätze geändert werden.",
    wrongAnswers: ["Sie sortiert das Ergebnis alphabetisch.", "Sie erstellt automatisch eine neue Tabelle.", "Sie bestätigt eine Transaktion dauerhaft."],
    explanation: "Ohne passende WHERE-Bedingung kann UPDATE sehr viele oder alle Datensätze ändern."
  },
  {
    id: "datenbanken-sql-020",
    category: "datenbanken-sql",
    topic: "insert-update-delete",
    difficulty: "leicht",
    question: "Warum ist eine WHERE-Klausel bei DELETE-Anweisungen wichtig?",
    correctAnswer: "Sie begrenzt, welche Datensätze gelöscht werden.",
    wrongAnswers: ["Sie erstellt einen Primärschlüssel.", "Sie sortiert die gelöschten Datensätze.", "Sie verhindert jede Änderung am Datenbestand."],
    explanation: "DELETE ohne passende WHERE-Bedingung kann alle Datensätze einer Tabelle entfernen."
  },
  {
    id: "datenbanken-sql-021",
    category: "datenbanken-sql",
    topic: "insert-update-delete",
    difficulty: "leicht",
    question: "Welche Anweisung setzt in der Tabelle `kunden` den Ort eines Kunden mit ID 5 auf `Bonn`?",
    correctAnswer: "UPDATE kunden SET ort = 'Bonn' WHERE id = 5;",
    wrongAnswers: ["INSERT kunden SET ort = 'Bonn' WHERE id = 5;", "SELECT kunden SET ort = 'Bonn' WHERE id = 5;", "DELETE kunden SET ort = 'Bonn' WHERE id = 5;"],
    explanation: "UPDATE ändert vorhandene Datensätze; SET legt den neuen Wert fest."
  },
  {
    id: "datenbanken-sql-022",
    category: "datenbanken-sql",
    topic: "insert-update-delete",
    difficulty: "leicht",
    question: "Welche Anweisung fügt einen Kunden mit Namen `Meyer` in die Tabelle `kunden` ein?",
    correctAnswer: "INSERT INTO kunden (name) VALUES ('Meyer');",
    wrongAnswers: ["UPDATE kunden (name) VALUES ('Meyer');", "SELECT INTO kunden (name) VALUES ('Meyer');", "DELETE INTO kunden (name) VALUES ('Meyer');"],
    explanation: "INSERT INTO gibt die Tabelle, Spalten und einzufügenden Werte an."
  },
  {
    id: "datenbanken-sql-023",
    category: "datenbanken-sql",
    topic: "insert-update-delete",
    difficulty: "leicht",
    question: "Welche Anweisung löscht den Kunden mit der ID 7 aus der Tabelle `kunden`?",
    correctAnswer: "DELETE FROM kunden WHERE id = 7;",
    wrongAnswers: ["DROP kunden WHERE id = 7;", "REMOVE kunden id = 7;", "UPDATE kunden DELETE id = 7;"],
    explanation: "DELETE FROM löscht Datensätze aus einer Tabelle."
  },
  {
    id: "datenbanken-sql-024",
    category: "datenbanken-sql",
    topic: "insert-update-delete",
    difficulty: "leicht",
    question: "Welcher Teil einer INSERT-Anweisung enthält die neu einzufügenden Daten?",
    correctAnswer: "VALUES",
    wrongAnswers: ["WHERE", "ORDER BY", "GROUP BY"],
    explanation: "VALUES enthält die Werte, die in die angegebenen Spalten eingefügt werden."
  },
  {
    id: "datenbanken-sql-025",
    category: "datenbanken-sql",
    topic: "insert-update-delete",
    difficulty: "leicht",
    question: "Was passiert bei `DELETE FROM kunden;` ohne WHERE-Klausel?",
    correctAnswer: "Alle Datensätze der Tabelle können gelöscht werden.",
    wrongAnswers: ["Nur der erste Datensatz wird gelöscht.", "Die Tabelle wird automatisch sortiert.", "Die Datenbank wird in den Lesemodus versetzt."],
    explanation: "Ohne WHERE schränkt DELETE die betroffenen Zeilen nicht ein."
  },
  {
    id: "datenbanken-sql-026",
    category: "datenbanken-sql",
    topic: "ddl-dml-dcl-tcl",
    difficulty: "leicht",
    question: "Welche SQL-Befehle gehören typischerweise zur DDL?",
    correctAnswer: "CREATE, ALTER und DROP",
    wrongAnswers: ["SELECT, INSERT und UPDATE", "COMMIT und ROLLBACK", "GRANT und REVOKE"],
    explanation: "DDL beschreibt und verändert Datenbankstrukturen."
  },
  {
    id: "datenbanken-sql-027",
    category: "datenbanken-sql",
    topic: "ddl-dml-dcl-tcl",
    difficulty: "leicht",
    question: "Welche SQL-Befehle gehören typischerweise zur DML?",
    correctAnswer: "SELECT, INSERT, UPDATE und DELETE",
    wrongAnswers: ["CREATE, ALTER und DROP", "COMMIT und ROLLBACK", "GRANT und REVOKE"],
    explanation: "DML dient zum Abfragen und Bearbeiten von Daten."
  },
  {
    id: "datenbanken-sql-028",
    category: "datenbanken-sql",
    topic: "ddl-dml-dcl-tcl",
    difficulty: "leicht",
    question: "Welche SQL-Befehle gehören typischerweise zur TCL?",
    correctAnswer: "COMMIT und ROLLBACK",
    wrongAnswers: ["CREATE und ALTER", "SELECT und WHERE", "GRANT und REVOKE"],
    explanation: "TCL steuert Transaktionen, zum Beispiel durch Bestätigen oder Zurücknehmen."
  },
  {
    id: "datenbanken-sql-029",
    category: "datenbanken-sql",
    topic: "ddl-dml-dcl-tcl",
    difficulty: "leicht",
    question: "Welche SQL-Befehle gehören typischerweise zur DCL?",
    correctAnswer: "GRANT und REVOKE",
    wrongAnswers: ["SELECT und JOIN", "INSERT und DELETE", "COMMIT und ROLLBACK"],
    explanation: "DCL wird zur Rechtevergabe und Rechteentziehung verwendet."
  },
  {
    id: "datenbanken-sql-030",
    category: "datenbanken-sql",
    topic: "ddl-dml-dcl-tcl",
    difficulty: "leicht",
    question: "Welche Anweisung erstellt eine neue Tabelle?",
    correctAnswer: "CREATE TABLE",
    wrongAnswers: ["SELECT TABLE", "INSERT TABLE", "COMMIT TABLE"],
    explanation: "CREATE TABLE legt die Struktur einer neuen Tabelle an."
  },
  {
    id: "datenbanken-sql-031",
    category: "datenbanken-sql",
    topic: "ddl-dml-dcl-tcl",
    difficulty: "leicht",
    question: "Welche Anweisung verändert die Struktur einer bestehenden Tabelle?",
    correctAnswer: "ALTER TABLE",
    wrongAnswers: ["UPDATE TABLE", "SELECT TABLE", "ROLLBACK TABLE"],
    explanation: "ALTER TABLE ändert die Definition einer Tabelle, zum Beispiel durch neue Spalten."
  },
  {
    id: "datenbanken-sql-032",
    category: "datenbanken-sql",
    topic: "ddl-dml-dcl-tcl",
    difficulty: "leicht",
    question: "Welche Anweisung löscht eine Tabelle samt Struktur?",
    correctAnswer: "DROP TABLE",
    wrongAnswers: ["DELETE ROW", "SELECT TABLE", "ORDER TABLE"],
    explanation: "DROP TABLE entfernt die Tabelle selbst und nicht nur einzelne Datensätze."
  },
  {
    id: "datenbanken-sql-033",
    category: "datenbanken-sql",
    topic: "ddl-dml-dcl-tcl",
    difficulty: "leicht",
    question: "Welche Anweisung vergibt einem Benutzer Rechte?",
    correctAnswer: "GRANT",
    wrongAnswers: ["REVOKE", "SELECT", "ROLLBACK"],
    explanation: "GRANT vergibt Berechtigungen auf Datenbankobjekte."
  },
  {
    id: "datenbanken-sql-034",
    category: "datenbanken-sql",
    topic: "ddl-dml-dcl-tcl",
    difficulty: "leicht",
    question: "Welche Anweisung entzieht einem Benutzer Rechte?",
    correctAnswer: "REVOKE",
    wrongAnswers: ["GRANT", "INSERT", "COMMIT"],
    explanation: "REVOKE entzieht zuvor vergebene Berechtigungen."
  },
  {
    id: "datenbanken-sql-035",
    category: "datenbanken-sql",
    topic: "ddl-dml-dcl-tcl",
    difficulty: "leicht",
    question: "Welche SQL-Kategorie beschreibt Befehle zur Steuerung von Transaktionen?",
    correctAnswer: "TCL",
    wrongAnswers: ["DDL", "DML", "DCL"],
    explanation: "TCL steht für Transaction Control Language."
  },
  {
    id: "datenbanken-sql-036",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Was liefert ein INNER JOIN?",
    correctAnswer: "Nur Datensätze, bei denen die Join-Bedingung in beiden Tabellen erfüllt ist.",
    wrongAnswers: ["Alle Datensätze der linken Tabelle ohne Bedingung.", "Alle Datensätze beider Tabellen ohne Bezug.", "Nur Datensätze ohne Primärschlüssel."],
    explanation: "INNER JOIN liefert nur passende Kombinationen aus beiden Tabellen."
  },
  {
    id: "datenbanken-sql-037",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Was liefert ein LEFT JOIN?",
    correctAnswer: "Alle Datensätze der linken Tabelle und passende Datensätze der rechten Tabelle.",
    wrongAnswers: ["Nur Datensätze der rechten Tabelle.", "Nur Datensätze mit identischen Primärschlüsseln.", "Nur vollständig leere Datensätze."],
    explanation: "LEFT JOIN behält alle Zeilen der linken Tabelle bei."
  },
  {
    id: "datenbanken-sql-038",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Warum werden Tabellen in relationalen Datenbanken häufig über Schlüssel verknüpft?",
    correctAnswer: "Damit zusammengehörige Daten eindeutig verbunden werden können.",
    wrongAnswers: ["Damit alle Tabellen denselben Namen haben.", "Damit Datensätze automatisch gelöscht werden.", "Damit keine WHERE-Klauseln mehr nötig sind."],
    explanation: "Schlüssel ermöglichen eindeutige Beziehungen zwischen Datensätzen."
  },
  {
    id: "datenbanken-sql-039",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Welche Beziehung liegt vor, wenn ein Kunde mehrere Bestellungen haben kann, eine Bestellung aber genau zu einem Kunden gehört?",
    correctAnswer: "1:n-Beziehung",
    wrongAnswers: ["1:1-Beziehung", "n:m-Beziehung", "0:0-Beziehung"],
    explanation: "Ein Kunde kann viele Bestellungen haben; jede Bestellung verweist auf einen Kunden."
  },
  {
    id: "datenbanken-sql-040",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Wie wird eine n:m-Beziehung in einer relationalen Datenbank typischerweise umgesetzt?",
    correctAnswer: "Mit einer Zwischentabelle, die Fremdschlüssel auf beide Tabellen enthält.",
    wrongAnswers: ["Durch Löschen beider Tabellen.", "Durch Speichern aller Daten in einer Textspalte.", "Durch Entfernen aller Primärschlüssel."],
    explanation: "Eine Zwischentabelle löst eine n:m-Beziehung in zwei 1:n-Beziehungen auf."
  },
  {
    id: "datenbanken-sql-041",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Welche Tabellen werden bei einer Bestellung typischerweise verknüpft, um den Kundennamen zur Bestellung auszugeben?",
    correctAnswer: "kunden und bestellungen",
    wrongAnswers: ["produkte und kategorien ohne Bezug", "benutzer und rollen ohne Bestellung", "logs und sessions ohne Kundendaten"],
    explanation: "Die Bestellung enthält meist einen Fremdschlüssel auf den Kunden."
  },
  {
    id: "datenbanken-sql-042",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Welche SQL-Klausel formuliert die Verknüpfungsbedingung bei einem JOIN?",
    correctAnswer: "ON",
    wrongAnswers: ["WHERE ONLY", "VALUES", "HAVING TABLE"],
    explanation: "ON beschreibt, welche Spalten der beteiligten Tabellen zusammenpassen."
  },
  {
    id: "datenbanken-sql-043",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Welche JOIN-Abfrage verknüpft Bestellungen mit Kunden über die Kundennummer?",
    correctAnswer: "SELECT * FROM bestellungen b JOIN kunden k ON b.kunden_id = k.id;",
    wrongAnswers: ["SELECT * FROM bestellungen b JOIN kunden k WHERE b.kunden_id;", "SELECT * FROM bestellungen b INSERT kunden k ON b.kunden_id = k.id;", "SELECT * FROM bestellungen b ORDER kunden k ON b.kunden_id = k.id;"],
    explanation: "JOIN ... ON verbindet Tabellen über eine passende Bedingung."
  },
  {
    id: "datenbanken-sql-044",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Was ist ein typischer Zweck einer Beziehungstabelle?",
    correctAnswer: "Sie verbindet Datensätze zweier Tabellen bei einer n:m-Beziehung.",
    wrongAnswers: ["Sie ersetzt alle SELECT-Abfragen.", "Sie speichert ausschließlich Datenbankpasswörter.", "Sie verhindert jede Normalisierung."],
    explanation: "Beziehungstabellen speichern Zuordnungen zwischen zwei Entitätstabellen."
  },
  {
    id: "datenbanken-sql-045",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Was bedeutet referenzielle Integrität?",
    correctAnswer: "Fremdschlüssel verweisen nur auf vorhandene passende Datensätze.",
    wrongAnswers: ["Alle Spalten müssen Text enthalten.", "Jede Tabelle darf nur einen Datensatz haben.", "Alle Abfragen müssen alphabetisch sortiert sein."],
    explanation: "Referenzielle Integrität verhindert ungültige Verweise zwischen Tabellen."
  },
  {
    id: "datenbanken-sql-046",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Was kann passieren, wenn eine JOIN-Bedingung fehlt?",
    correctAnswer: "Es kann ein kartesisches Produkt mit sehr vielen Kombinationen entstehen.",
    wrongAnswers: ["Die Datenbank wird automatisch normalisiert.", "Alle Fremdschlüssel werden gelöscht.", "Nur die erste Tabelle wird angezeigt."],
    explanation: "Ohne passende Join-Bedingung werden Zeilen unnötig miteinander kombiniert."
  },
  {
    id: "datenbanken-sql-047",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Welche Beziehung passt zu einer Person und einem Personalausweis, wenn jede Person höchstens einen Ausweis besitzt?",
    correctAnswer: "1:1-Beziehung",
    wrongAnswers: ["1:n-Beziehung", "n:m-Beziehung", "m:n:n-Beziehung"],
    explanation: "Bei einer 1:1-Beziehung gehört ein Datensatz höchstens zu einem passenden Datensatz."
  },
  {
    id: "datenbanken-sql-048",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Warum sollten Beziehungen zwischen Tabellen bewusst modelliert werden?",
    correctAnswer: "Damit Daten konsistent und ohne unnötige Redundanz gespeichert werden.",
    wrongAnswers: ["Damit alle Tabellen dieselben Spaltennamen verwenden müssen.", "Damit jede Abfrage automatisch schneller wird.", "Damit keine Backups mehr erforderlich sind."],
    explanation: "Bewusst modellierte Beziehungen verbessern Datenqualität und Wartbarkeit."
  },
  {
    id: "datenbanken-sql-049",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Welche Aussage beschreibt einen Fremdschlüssel in einer Bestelltabelle korrekt?",
    correctAnswer: "Er kann auf den Primärschlüssel der Kundentabelle verweisen.",
    wrongAnswers: ["Er muss immer denselben Namen wie die Tabelle haben.", "Er ersetzt die Kundentabelle vollständig.", "Er darf niemals NULL sein."],
    explanation: "Ein Fremdschlüssel stellt eine Beziehung zu einem Datensatz einer anderen Tabelle her."
  },
  {
    id: "datenbanken-sql-050",
    category: "datenbanken-sql",
    topic: "joins-beziehungen",
    difficulty: "mittel",
    question: "Was ist der Hauptunterschied zwischen INNER JOIN und LEFT JOIN?",
    correctAnswer: "LEFT JOIN behält alle Zeilen der linken Tabelle, INNER JOIN nur passende Zeilen.",
    wrongAnswers: ["INNER JOIN löscht Datensätze, LEFT JOIN erstellt Tabellen.", "LEFT JOIN funktioniert nur mit Primärschlüsseln.", "INNER JOIN sortiert automatisch absteigend."],
    explanation: "LEFT JOIN zeigt auch linke Datensätze ohne passenden rechten Datensatz."
  },
  {
    id: "datenbanken-sql-051",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Was ist ein Primärschlüssel?",
    correctAnswer: "Ein Attribut oder eine Attributkombination, die Datensätze eindeutig identifiziert.",
    wrongAnswers: ["Ein Passwort für die Datenbankanmeldung.", "Eine automatisch sortierte Spalte ohne Bedeutung.", "Ein Kommentar innerhalb einer SQL-Abfrage."],
    explanation: "Ein Primärschlüssel identifiziert jeden Datensatz eindeutig."
  },
  {
    id: "datenbanken-sql-052",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Was ist ein Fremdschlüssel?",
    correctAnswer: "Ein Attribut, das auf einen Schlüssel einer anderen Tabelle verweist.",
    wrongAnswers: ["Ein zufällig generierter Tabellenname.", "Ein Schlüssel zum Verschlüsseln von Backups.", "Ein Feld, das niemals Beziehungen abbildet."],
    explanation: "Fremdschlüssel bilden Beziehungen zwischen Tabellen ab."
  },
  {
    id: "datenbanken-sql-053",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Was beschreibt ein ER-Modell?",
    correctAnswer: "Entitäten, Attribute und Beziehungen eines Datenmodells.",
    wrongAnswers: ["Nur die Farben einer Benutzeroberfläche.", "Nur die IP-Adressen eines Netzwerks.", "Nur die Reihenfolge von Programmfunktionen."],
    explanation: "ER steht für Entity Relationship und dient der Datenmodellierung."
  },
  {
    id: "datenbanken-sql-054",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Was ist eine Entität im ER-Modell?",
    correctAnswer: "Ein eindeutig beschreibbares Objekt der realen oder fachlichen Welt.",
    wrongAnswers: ["Eine einzelne SQL-Klausel.", "Ein Fehler in einer Transaktion.", "Ein Sortierbefehl für Abfragen."],
    explanation: "Entitäten sind beispielsweise Kunde, Bestellung oder Produkt."
  },
  {
    id: "datenbanken-sql-055",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Was ist ein Attribut im ER-Modell?",
    correctAnswer: "Eine Eigenschaft einer Entität.",
    wrongAnswers: ["Eine Beziehungstabelle ohne Spalten.", "Ein Befehl zum Löschen einer Tabelle.", "Eine Transaktion ohne COMMIT."],
    explanation: "Attribute beschreiben Entitäten, zum Beispiel Name oder Geburtsdatum."
  },
  {
    id: "datenbanken-sql-056",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Warum sollte ein Primärschlüssel stabil sein?",
    correctAnswer: "Weil andere Tabellen dauerhaft darauf verweisen können.",
    wrongAnswers: ["Weil er dadurch automatisch verschlüsselt wird.", "Weil er nur sichtbare Texte enthalten darf.", "Weil er nie in Beziehungen verwendet wird."],
    explanation: "Ändert sich ein Primärschlüssel häufig, können Beziehungen schwer wartbar werden."
  },
  {
    id: "datenbanken-sql-057",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Warum werden künstliche Schlüssel wie numerische IDs häufig verwendet?",
    correctAnswer: "Sie sind stabil, kurz und eindeutig.",
    wrongAnswers: ["Sie ersetzen alle fachlichen Attribute.", "Sie verhindern jede Normalisierung.", "Sie machen Fremdschlüssel unmöglich."],
    explanation: "Künstliche IDs eignen sich gut als technische Primärschlüssel."
  },
  {
    id: "datenbanken-sql-058",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Was bedeutet Kardinalität in einem Datenmodell?",
    correctAnswer: "Sie beschreibt, wie viele Datensätze miteinander in Beziehung stehen können.",
    wrongAnswers: ["Sie gibt die Schriftgröße einer Tabelle an.", "Sie legt die Reihenfolge von SQL-Befehlen fest.", "Sie beschreibt nur die Länge von Textspalten."],
    explanation: "Kardinalitäten zeigen zum Beispiel 1:1, 1:n oder n:m-Beziehungen."
  },
  {
    id: "datenbanken-sql-059",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Welche Eigenschaft sollte ein Primärschlüssel immer erfüllen?",
    correctAnswer: "Er muss innerhalb der Tabelle eindeutig sein.",
    wrongAnswers: ["Er muss immer ein Name sein.", "Er muss immer NULL enthalten.", "Er muss in jeder Tabelle identisch heißen."],
    explanation: "Eindeutigkeit ist eine zentrale Voraussetzung für Primärschlüssel."
  },
  {
    id: "datenbanken-sql-060",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Welche Aussage zu NULL in einem Primärschlüssel ist korrekt?",
    correctAnswer: "Ein Primärschlüssel darf keine NULL-Werte enthalten.",
    wrongAnswers: ["Ein Primärschlüssel muss immer NULL sein.", "NULL verbessert die Eindeutigkeit eines Primärschlüssels.", "NULL ersetzt einen Fremdschlüssel."],
    explanation: "Primärschlüssel müssen eindeutig und vorhanden sein."
  },
  {
    id: "datenbanken-sql-061",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Was zeigt eine Beziehung zwischen Kunde und Bestellung im ER-Modell?",
    correctAnswer: "Wie Kundendatensätze mit Bestelldatensätzen zusammenhängen.",
    wrongAnswers: ["Welche Farbe die Kundentabelle hat.", "Welche SQL-Version installiert ist.", "Wie viele Server im Netzwerk stehen."],
    explanation: "Beziehungen beschreiben fachliche Zusammenhänge zwischen Entitäten."
  },
  {
    id: "datenbanken-sql-062",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Was ist ein zusammengesetzter Schlüssel?",
    correctAnswer: "Ein Schlüssel, der aus mehreren Attributen besteht.",
    wrongAnswers: ["Ein Schlüssel, der nie eindeutig sein darf.", "Ein verschlüsseltes Datenbankpasswort.", "Ein automatisch erstelltes ER-Diagramm."],
    explanation: "Zusammengesetzte Schlüssel nutzen mehrere Spalten zur eindeutigen Identifikation."
  },
  {
    id: "datenbanken-sql-063",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Wann ist ein Fremdschlüssel fachlich sinnvoll?",
    correctAnswer: "Wenn ein Datensatz auf einen zugehörigen Datensatz einer anderen Tabelle verweist.",
    wrongAnswers: ["Wenn eine Tabelle keine Spalten besitzt.", "Wenn Daten absichtlich doppelt gespeichert werden sollen.", "Wenn jede Abfrage ohne SELECT ausgeführt wird."],
    explanation: "Fremdschlüssel bilden fachliche Beziehungen technisch ab."
  },
  {
    id: "datenbanken-sql-064",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Warum sollte ein Datenmodell vor der Implementierung geprüft werden?",
    correctAnswer: "Damit Beziehungen, Schlüssel und Redundanzen früh erkannt werden.",
    wrongAnswers: ["Damit SQL-Abfragen grundsätzlich verboten werden.", "Damit keine Tabellen mehr nötig sind.", "Damit alle Daten als Bild gespeichert werden."],
    explanation: "Eine Prüfung des Modells reduziert spätere Fehler und Umbauten."
  },
  {
    id: "datenbanken-sql-065",
    category: "datenbanken-sql",
    topic: "schluessel-er-modell",
    difficulty: "mittel",
    question: "Was ist ein Kandidatenschlüssel?",
    correctAnswer: "Ein Attribut oder eine Attributkombination, die als Primärschlüssel geeignet wäre.",
    wrongAnswers: ["Ein ungültiger Fremdschlüssel.", "Ein zufälliger Tabellenkommentar.", "Ein Befehl zum Starten einer Transaktion."],
    explanation: "Aus Kandidatenschlüsseln kann ein Primärschlüssel ausgewählt werden."
  },
  {
    id: "datenbanken-sql-066",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Was ist ein Ziel der Normalisierung?",
    correctAnswer: "Redundanzen und Änderungsanomalien reduzieren.",
    wrongAnswers: ["Alle Tabellen zu einer einzigen Spalte zusammenführen.", "Alle Fremdschlüssel entfernen.", "Jede Abfrage ohne WHERE ausführen."],
    explanation: "Normalisierung strukturiert Daten, damit sie konsistenter gepflegt werden können."
  },
  {
    id: "datenbanken-sql-067",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Was verlangt die erste Normalform?",
    correctAnswer: "Attribute enthalten atomare, nicht weiter sinnvoll zerlegbare Werte.",
    wrongAnswers: ["Jede Tabelle darf nur einen Datensatz haben.", "Alle Fremdschlüssel müssen gelöscht werden.", "Alle Tabellen müssen denselben Namen tragen."],
    explanation: "In der ersten Normalform werden wiederholte oder zusammengesetzte Werte vermieden."
  },
  {
    id: "datenbanken-sql-068",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Was bedeutet atomar im Zusammenhang mit der ersten Normalform?",
    correctAnswer: "Ein Feld enthält genau einen fachlich einzelnen Wert.",
    wrongAnswers: ["Ein Feld enthält mehrere Listenwerte.", "Ein Feld enthält immer eine komplette Tabelle.", "Ein Feld enthält ausschließlich verschlüsselte Daten."],
    explanation: "Atomare Werte lassen sich in diesem Kontext nicht weiter sinnvoll aufteilen."
  },
  {
    id: "datenbanken-sql-069",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Was ist eine Änderungsanomalie?",
    correctAnswer: "Ein Problem, bei dem mehrfach gespeicherte Daten nicht überall gleich geändert werden.",
    wrongAnswers: ["Ein absichtlich leerer Primärschlüssel.", "Ein schneller Indexzugriff.", "Ein korrekt bestätigter COMMIT."],
    explanation: "Redundante Daten können bei Änderungen inkonsistent werden."
  },
  {
    id: "datenbanken-sql-070",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Warum können mehrfach gespeicherte Kundendaten problematisch sein?",
    correctAnswer: "Änderungen müssen an mehreren Stellen konsistent durchgeführt werden.",
    wrongAnswers: ["SELECT-Abfragen sind dann grundsätzlich unmöglich.", "Primärschlüssel dürfen dann nicht mehr verwendet werden.", "Die Datenbank benötigt keine Backups mehr."],
    explanation: "Mehrfach gespeicherte Daten erhöhen das Risiko widersprüchlicher Informationen."
  },
  {
    id: "datenbanken-sql-071",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Was beschreibt eine Einfügeanomalie?",
    correctAnswer: "Neue Informationen können nur gespeichert werden, wenn gleichzeitig andere unnötige Daten vorhanden sind.",
    wrongAnswers: ["Ein Index wird zu schnell gelesen.", "Eine Abfrage wird alphabetisch sortiert.", "Ein Fremdschlüssel verweist korrekt auf eine Tabelle."],
    explanation: "Einfügeanomalien entstehen durch ungünstig strukturierte Tabellen."
  },
  {
    id: "datenbanken-sql-072",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Was beschreibt eine Löschanomalie?",
    correctAnswer: "Beim Löschen eines Datensatzes gehen unbeabsichtigt weitere wichtige Informationen verloren.",
    wrongAnswers: ["DELETE wird immer automatisch rückgängig gemacht.", "ORDER BY löscht doppelte Werte.", "Ein Primärschlüssel wird automatisch erzeugt."],
    explanation: "Löschanomalien entstehen, wenn verschiedene fachliche Informationen ungünstig gekoppelt sind."
  },
  {
    id: "datenbanken-sql-073",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Was verlangt die zweite Normalform bei zusammengesetzten Schlüsseln?",
    correctAnswer: "Nicht-Schlüsselattribute müssen vom gesamten Schlüssel abhängen.",
    wrongAnswers: ["Alle Attribute müssen vom ersten Buchstaben des Tabellennamens abhängen.", "Jede Tabelle muss genau zwei Spalten haben.", "Fremdschlüssel dürfen nicht verwendet werden."],
    explanation: "Die zweite Normalform vermeidet partielle Abhängigkeiten."
  },
  {
    id: "datenbanken-sql-074",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Was ist eine partielle Abhängigkeit?",
    correctAnswer: "Ein Nicht-Schlüsselattribut hängt nur von einem Teil eines zusammengesetzten Schlüssels ab.",
    wrongAnswers: ["Ein Attribut hängt von keiner Tabelle ab.", "Ein Primärschlüssel enthält immer NULL.", "Eine Transaktion wurde erfolgreich bestätigt."],
    explanation: "Partielle Abhängigkeiten verletzen die zweite Normalform."
  },
  {
    id: "datenbanken-sql-075",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Was verlangt die dritte Normalform?",
    correctAnswer: "Nicht-Schlüsselattribute dürfen nicht transitiv von einem Schlüssel abhängen.",
    wrongAnswers: ["Jede Tabelle muss drei Primärschlüssel haben.", "Alle Daten müssen in einer Tabelle gespeichert werden.", "Jede Abfrage muss mit COMMIT enden."],
    explanation: "Die dritte Normalform reduziert transitive Abhängigkeiten."
  },
  {
    id: "datenbanken-sql-076",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Was ist eine transitive Abhängigkeit?",
    correctAnswer: "Ein Nicht-Schlüsselattribut hängt über ein anderes Nicht-Schlüsselattribut vom Schlüssel ab.",
    wrongAnswers: ["Ein Fremdschlüssel verweist direkt auf einen Primärschlüssel.", "Ein Index beschleunigt eine Suche.", "Ein Datensatz wird durch SELECT gelesen."],
    explanation: "Transitive Abhängigkeiten können zu Redundanzen führen."
  },
  {
    id: "datenbanken-sql-077",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Warum kann eine Aufteilung in mehrere Tabellen sinnvoll sein?",
    correctAnswer: "Sie kann Redundanzen verringern und Beziehungen klarer abbilden.",
    wrongAnswers: ["Sie macht Primärschlüssel grundsätzlich überflüssig.", "Sie verhindert alle SELECT-Abfragen.", "Sie löscht automatisch alte Daten."],
    explanation: "Normalisierte Tabellen trennen fachlich unterschiedliche Informationen."
  },
  {
    id: "datenbanken-sql-078",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Wann kann Denormalisierung bewusst eingesetzt werden?",
    correctAnswer: "Wenn Leseperformance wichtiger ist und Redundanz kontrolliert akzeptiert wird.",
    wrongAnswers: ["Wenn Datenqualität keine Rolle spielt.", "Wenn keine Tabellen mehr existieren dürfen.", "Wenn SQL Injection verhindert werden soll."],
    explanation: "Denormalisierung kann Performance verbessern, erhöht aber Pflegeaufwand und Redundanz."
  },
  {
    id: "datenbanken-sql-079",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Was ist ein typisches Zeichen für schlechte Normalisierung?",
    correctAnswer: "Dieselben fachlichen Informationen werden mehrfach in einer Tabelle gespeichert.",
    wrongAnswers: ["Jede Tabelle besitzt einen Primärschlüssel.", "Fremdschlüssel bilden Beziehungen ab.", "SELECT wird mit WHERE kombiniert."],
    explanation: "Wiederholte Informationen können auf Redundanz und Anomalien hinweisen."
  },
  {
    id: "datenbanken-sql-080",
    category: "datenbanken-sql",
    topic: "normalisierung",
    difficulty: "mittel",
    question: "Was sollte bei Normalisierung und Performance beachtet werden?",
    correctAnswer: "Saubere Struktur und Abfrageleistung müssen passend zum Anwendungsfall abgewogen werden.",
    wrongAnswers: ["Normalisierung verbietet alle JOINs.", "Performance hängt nie von Datenmodellen ab.", "Jede normalisierte Datenbank ist automatisch unsicher."],
    explanation: "Datenmodellierung muss fachliche Qualität und technische Nutzung berücksichtigen."
  },
  {
    id: "datenbanken-sql-081",
    category: "datenbanken-sql",
    topic: "transaktionen-acid",
    difficulty: "schwer",
    question: "Was ist eine Transaktion in einer Datenbank?",
    correctAnswer: "Eine logisch zusammengehörige Folge von Datenbankoperationen.",
    wrongAnswers: ["Ein einzelnes CSS-Layout.", "Ein dauerhaft geöffneter Netzwerkport.", "Eine automatisch sortierte Textdatei."],
    explanation: "Transaktionen fassen Operationen zusammen, die gemeinsam erfolgreich sein oder zurückgenommen werden sollen."
  },
  {
    id: "datenbanken-sql-082",
    category: "datenbanken-sql",
    topic: "transaktionen-acid",
    difficulty: "schwer",
    question: "Wofür steht das A in ACID?",
    correctAnswer: "Atomarität",
    wrongAnswers: ["Authentifizierung", "Archivierung", "Adressierung"],
    explanation: "Atomarität bedeutet, dass eine Transaktion ganz oder gar nicht ausgeführt wird."
  },
  {
    id: "datenbanken-sql-083",
    category: "datenbanken-sql",
    topic: "transaktionen-acid",
    difficulty: "schwer",
    question: "Was bedeutet Konsistenz im ACID-Kontext?",
    correctAnswer: "Eine Transaktion überführt die Datenbank von einem gültigen Zustand in einen gültigen Zustand.",
    wrongAnswers: ["Alle Daten werden öffentlich sichtbar.", "Alle Abfragen werden automatisch schneller.", "Jede Tabelle verliert ihre Schlüssel."],
    explanation: "Konsistenz erhält Regeln, Constraints und fachliche Integrität."
  },
  {
    id: "datenbanken-sql-084",
    category: "datenbanken-sql",
    topic: "transaktionen-acid",
    difficulty: "schwer",
    question: "Was bedeutet Isolation bei Transaktionen?",
    correctAnswer: "Gleichzeitige Transaktionen beeinflussen sich nicht unkontrolliert gegenseitig.",
    wrongAnswers: ["Tabellen dürfen keine Beziehungen haben.", "SELECT darf nie innerhalb einer Transaktion laufen.", "Alle Datensätze werden verschlüsselt gespeichert."],
    explanation: "Isolation schützt vor unerwünschten Nebenwirkungen paralleler Transaktionen."
  },
  {
    id: "datenbanken-sql-085",
    category: "datenbanken-sql",
    topic: "transaktionen-acid",
    difficulty: "schwer",
    question: "Was bedeutet Dauerhaftigkeit im ACID-Kontext?",
    correctAnswer: "Bestätigte Änderungen bleiben auch nach einem Systemausfall erhalten.",
    wrongAnswers: ["Unbestätigte Änderungen werden immer veröffentlicht.", "Jede Abfrage läuft dauerhaft weiter.", "Daten werden nur im Arbeitsspeicher gehalten."],
    explanation: "Durability stellt sicher, dass COMMIT-bestätigte Änderungen dauerhaft gespeichert sind."
  },
  {
    id: "datenbanken-sql-086",
    category: "datenbanken-sql",
    topic: "transaktionen-acid",
    difficulty: "schwer",
    question: "Welche SQL-Anweisung bestätigt die Änderungen einer Transaktion dauerhaft?",
    correctAnswer: "COMMIT",
    wrongAnswers: ["ROLLBACK", "SELECT", "GRANT"],
    explanation: "COMMIT schließt eine Transaktion erfolgreich ab."
  },
  {
    id: "datenbanken-sql-087",
    category: "datenbanken-sql",
    topic: "transaktionen-acid",
    difficulty: "schwer",
    question: "Welche SQL-Anweisung nimmt Änderungen einer noch nicht bestätigten Transaktion zurück?",
    correctAnswer: "ROLLBACK",
    wrongAnswers: ["COMMIT", "INSERT", "ORDER BY"],
    explanation: "ROLLBACK verwirft die Änderungen einer laufenden Transaktion."
  },
  {
    id: "datenbanken-sql-088",
    category: "datenbanken-sql",
    topic: "transaktionen-acid",
    difficulty: "schwer",
    question: "Warum sind Transaktionen bei einer Banküberweisung besonders wichtig?",
    correctAnswer: "Belastung und Gutschrift müssen gemeinsam erfolgreich sein oder gemeinsam zurückgenommen werden.",
    wrongAnswers: ["Die Sortierung der Kundennamen muss geändert werden.", "Die Datenbank soll alle Tabellen löschen.", "Die Benutzeroberfläche soll automatisch neu starten."],
    explanation: "Transaktionen verhindern unvollständige fachliche Abläufe."
  },
  {
    id: "datenbanken-sql-089",
    category: "datenbanken-sql",
    topic: "transaktionen-acid",
    difficulty: "schwer",
    question: "Was kann ein Dirty Read verursachen?",
    correctAnswer: "Eine Transaktion liest noch nicht bestätigte Änderungen einer anderen Transaktion.",
    wrongAnswers: ["Eine Tabelle wird korrekt normalisiert.", "Ein Primärschlüssel wird eindeutig gesetzt.", "Eine Abfrage verwendet ORDER BY."],
    explanation: "Dirty Reads können zu falschen Entscheidungen auf Basis unbestätigter Daten führen."
  },
  {
    id: "datenbanken-sql-090",
    category: "datenbanken-sql",
    topic: "transaktionen-acid",
    difficulty: "schwer",
    question: "Warum sollten lange Transaktionen vermieden werden?",
    correctAnswer: "Sie können Sperren länger halten und andere Zugriffe behindern.",
    wrongAnswers: ["Sie löschen automatisch alle Indizes.", "Sie verhindern grundsätzlich jede Datenintegrität.", "Sie machen SELECT-Anweisungen syntaktisch ungültig."],
    explanation: "Lange Transaktionen können Nebenläufigkeit und Performance verschlechtern."
  },
  {
    id: "datenbanken-sql-091",
    category: "datenbanken-sql",
    topic: "indizes-sql-injection",
    difficulty: "schwer",
    question: "Wozu dient ein Datenbankindex hauptsächlich?",
    correctAnswer: "Er kann das Suchen und Sortieren von Datensätzen beschleunigen.",
    wrongAnswers: ["Er ersetzt Backups vollständig.", "Er löscht doppelte Tabellen automatisch.", "Er verhindert jede Benutzeranmeldung."],
    explanation: "Ein Index ist eine zusätzliche Datenstruktur für schnellere Zugriffe."
  },
  {
    id: "datenbanken-sql-092",
    category: "datenbanken-sql",
    topic: "indizes-sql-injection",
    difficulty: "schwer",
    question: "Welcher Nachteil kann durch zu viele Indizes entstehen?",
    correctAnswer: "Schreiboperationen können langsamer werden und mehr Speicher benötigen.",
    wrongAnswers: ["SELECT-Anweisungen werden grundsätzlich verboten.", "Primärschlüssel werden automatisch gelöscht.", "Tabellen können keine Spalten mehr besitzen."],
    explanation: "Indizes müssen bei INSERT, UPDATE und DELETE mitgepflegt werden."
  },
  {
    id: "datenbanken-sql-093",
    category: "datenbanken-sql",
    topic: "indizes-sql-injection",
    difficulty: "schwer",
    question: "Was ist SQL Injection?",
    correctAnswer: "Das Einschleusen manipulierter SQL-Bestandteile über unsichere Eingaben.",
    wrongAnswers: ["Das Sortieren von Ergebnissen mit ORDER BY.", "Das Erstellen eines Fremdschlüssels.", "Das Bestätigen einer Transaktion mit COMMIT."],
    explanation: "SQL Injection nutzt unsicher zusammengesetzte Abfragen aus."
  },
  {
    id: "datenbanken-sql-094",
    category: "datenbanken-sql",
    topic: "indizes-sql-injection",
    difficulty: "schwer",
    question: "Warum schützen Prepared Statements gegen SQL Injection?",
    correctAnswer: "Sie trennen SQL-Struktur und Benutzereingaben als Parameter.",
    wrongAnswers: ["Sie löschen alle Eingaben automatisch.", "Sie machen Datenbanken grundsätzlich schreibgeschützt.", "Sie ersetzen jede Rechteprüfung."],
    explanation: "Parameter werden nicht als ausführbarer SQL-Code interpretiert."
  },
  {
    id: "datenbanken-sql-095",
    category: "datenbanken-sql",
    topic: "indizes-sql-injection",
    difficulty: "schwer",
    question: "Welche Eingabe kann bei unsicherer SQL-Verkettung besonders gefährlich sein?",
    correctAnswer: "Eine Eingabe, die SQL-Syntax wie Anführungszeichen oder Bedingungen enthält.",
    wrongAnswers: ["Eine Eingabe mit nur einem Buchstaben ohne Sonderzeichen.", "Eine Eingabe, die ausschließlich aus Leerzeichen entfernt wurde.", "Eine Eingabe, die bereits als Parameter gebunden ist."],
    explanation: "Unsicher verkettete Eingaben können die Bedeutung der SQL-Abfrage verändern."
  },
  {
    id: "datenbanken-sql-096",
    category: "datenbanken-sql",
    topic: "indizes-sql-injection",
    difficulty: "schwer",
    question: "Warum ist Rechtebegrenzung auch bei Datenbankzugriffen wichtig?",
    correctAnswer: "Ein kompromittierter Zugriff kann dann weniger Schaden verursachen.",
    wrongAnswers: ["Sie ersetzt jede Eingabevalidierung.", "Sie macht Indizes überflüssig.", "Sie verhindert automatisch alle Programmfehler."],
    explanation: "Least Privilege begrenzt die Auswirkungen von Fehlern oder Angriffen."
  },
  {
    id: "datenbanken-sql-097",
    category: "datenbanken-sql",
    topic: "indizes-sql-injection",
    difficulty: "schwer",
    question: "Wann ist ein Index auf einer Spalte besonders sinnvoll?",
    correctAnswer: "Wenn die Spalte häufig zum Suchen, Filtern oder Sortieren genutzt wird.",
    wrongAnswers: ["Wenn die Spalte nie abgefragt wird.", "Wenn die Tabelle nur gelöscht werden soll.", "Wenn jede Abfrage ohne WHERE läuft."],
    explanation: "Indizes lohnen sich besonders bei häufig genutzten Such- und Sortierspalten."
  },
  {
    id: "datenbanken-sql-098",
    category: "datenbanken-sql",
    topic: "indizes-sql-injection",
    difficulty: "schwer",
    question: "Warum sollte ein Index nicht unüberlegt auf jede Spalte gesetzt werden?",
    correctAnswer: "Weil jeder Index Speicher kostet und bei Datenänderungen gepflegt werden muss.",
    wrongAnswers: ["Weil Indizes keine Abfragen beschleunigen können.", "Weil Indizes Primärschlüssel verbieten.", "Weil Indizes automatisch SQL Injection erzeugen."],
    explanation: "Indizes sind nützlich, aber verursachen Verwaltungsaufwand."
  },
  {
    id: "datenbanken-sql-099",
    category: "datenbanken-sql",
    topic: "indizes-sql-injection",
    difficulty: "schwer",
    question: "Welche Maßnahme hilft zusätzlich gegen SQL Injection?",
    correctAnswer: "Eingaben validieren und Datenbankrechte minimal vergeben.",
    wrongAnswers: ["SQL-Abfragen als Textverkettung aus Benutzereingaben bauen.", "Alle Fehlermeldungen mit kompletten SQL-Abfragen veröffentlichen.", "Administrationsrechte für jede Anwendung verwenden."],
    explanation: "Sichere Parameterbindung, Validierung und minimale Rechte reduzieren das Risiko."
  },
  {
    id: "datenbanken-sql-100",
    category: "datenbanken-sql",
    topic: "indizes-sql-injection",
    difficulty: "schwer",
    question: "Warum sollten detaillierte SQL-Fehlermeldungen nicht ungefiltert an Nutzer ausgegeben werden?",
    correctAnswer: "Sie können Angreifern Informationen über Tabellen, Spalten oder Abfragen liefern.",
    wrongAnswers: ["Sie verhindern grundsätzlich jede Transaktion.", "Sie machen SELECT-Anweisungen unmöglich.", "Sie löschen automatisch alle Indizes."],
    explanation: "Fehlermeldungen können technische Details verraten und Angriffe erleichtern."
  }
];
