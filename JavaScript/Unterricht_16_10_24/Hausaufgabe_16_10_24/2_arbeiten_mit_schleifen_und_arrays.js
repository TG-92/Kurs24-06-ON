// Erstellen eines Arrays mit den Namen von fünf verschiedenen Städten.

const staedte = ["Berlin", "Hamburg", "München", "Leipzig", "Ostrhauderfehn"];
console.log(staedte); // Ausgabe der Städte wie ich sie eingetragen habe.

// Iterierung über das Array und Ausgabe jeder Stadt in Großbuchstaben.

for (const stadt of staedte) {
  console.log(stadt.toUpperCase());
}

// Erstellung eines neuen Arrays, das die Anzahl der Buchstaben in jedem Stadtnamen speichert.

const anzahlBuchstaben = staedte.map(stadt => stadt.length);

console.log(anzahlBuchstaben);