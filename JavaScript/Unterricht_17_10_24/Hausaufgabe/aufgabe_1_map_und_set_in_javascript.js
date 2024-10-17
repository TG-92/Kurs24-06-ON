// Aufgabenstelleung
// Ziel: 
// Anwenden der Kenntnisse über `Map` und `Set` aus der Unterrichtseinheit.
// Entwickeln einer kleinen Anwendung zur Verwaltung von Daten mit diesen
// Datenstrukturen.

// Aufgabe 1 - Punkt 1: Benutzerverwaltung mit `Map`.
// Erstelle eine neue `Map` namens `benutzerVerwaltung`, die Benutzernamen als
// Schlüssel und Objekte als Werte speichert. Die Objekte sollen folgende
// Eigenschaften enthalten: email (`benutzer123@example.com`), rolle (`Admin`, `User`, `Gast`)
// 2: Füge mindestens drei Benutzer zur Map hinzu.
// 3: Erstelle eine Funktion `zeigeBenutzer`, die alle Benutzer und deren Details im
// Format "Benutzername: Email, Rolle" ausgibt.
// Hinweis: Nutze .set(), .get() und .forEach()

// Schritt 1 - `Map` namens `benutzerVerwaltung` erstellen

let benutzerVerwaltung = new Map();

// Schritt 2 - Mindestens drei Benutzer hinzufügen.

benutzerVerwaltung.set("Sidespell", { email: "sidespell@gmx.de", rolle: "Admin"});
benutzerVerwaltung.set("Kohledawarrior", { email: "sexyrudirasenmaeherboy@spankmail.com", rolle: "User"});
benutzerVerwaltung.set("BudiBonksiDinksiDonksi", { email: "budibonksidinksidonksi@bonksimail.de", rolle: "Developer"});

// Schritt 3 - Funktion `zeigeBenutzer`erstellen.

function zeigeBenutzer() {
  console.log("Benutzerverwaltung:");
  benutzerVerwaltung.forEach((benutzer, name) => {
    console.log(`${name}: ${benutzer.email}, ${benutzer.rolle}`);
  });
}

// Schritt 4 - Funktion `zeigeBenutzer`aufrufen.

zeigeBenutzer();