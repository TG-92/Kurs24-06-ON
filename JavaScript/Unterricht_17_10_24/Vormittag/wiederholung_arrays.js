// Wiederholung: Arrays
// Was ist ein Array?
// Eine geordnete Liste von Werten, zugänglich über nummerische Indizes.
// Kann beliebige Datentypen speichern.

let fruechte = [`Apfel`, `Banane`]; // Ein einfaches Array von Früchten
console.log(fruechte[0]); // Ausgabe: Apfel
fruechte.push(`Orange`); // Eine weitere Frucht hinzufügen.

// Über das Array iterieren und jedes Element ausgeben.
for (let i = 0; i < fruechte.length; i++) {
    console.log(fruechte[i]);
}

