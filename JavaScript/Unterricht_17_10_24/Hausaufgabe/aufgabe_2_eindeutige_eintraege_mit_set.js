// 1. Erstellung von `Set`namens `besuchteSeiten`, um die Namen von Seiten zu 
// speichern, die ein Benutzer besucht hat. (z.B. `Startseite`, `Profil`, `Einstellungen`)
// 2. Fügen Sie mindestens fünf Seitennamen zum `Set`hinzu, wobei zwei Namen
// dupliziert sein sollten.
// 3. Geben Sie die Anzahl der eindeutigen Seiten aus.
// 4. Schreiben Sie eine Funktion `zeigeSeiten`, die alle Seitennamen im Format
// "Besuchte Seite: [Name]" ausgibt.
// Tipp: Verwenden Sie .add(), .has(), und .size()

// Schritt 1 - `Set` namens `besuchteSeiten` erstellen

let besuchteSeiten = new Set(); // Set namens besuchteSeiten erstellt.

// Schritt 2 - fünf Seitennamen zum `Set` hinzufügen.

besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Profil'); // Duplikat hinzugefügt wie in Aufgabe verlangt.
besuchteSeiten.add('Profil'); // Duplikat hinzugefügt wie in Aufgabe verlangt.

// Schritt 3 - Anzahl der eindeutigen Seiten ausgeben.

console.log(`Anzahl der eindeutigen Seiten: ${besuchteSeiten.size}`);

// Schritt 4 - Funktion `zeigeSeiten` schreiben.

function zeigeSeiten() { // Hier wird die Funktion `zeigeSeiten` implementiert.
  besuchteSeiten.forEach((seite) => { // Hier wird die Funktion für jeden Seitenname aufgerufen und ausgegeben // .forEach() wird verwendet, um alle Elemente des Sets zu durchlaufen
    console.log(`Besuchte Seite: ${seite}`); // Hier wird der Seitenname und deren Namen ausgegeben.
  }); // Hier wird die Funktion `zeigeSeiten` beendet.
} // Hier wird die Funktion `zeigeSeiten` aufgerufen.
