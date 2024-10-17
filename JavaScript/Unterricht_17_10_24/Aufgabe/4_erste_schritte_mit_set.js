// Erstellung von einem Set namens `buchstabenSet`und hinzufügen der Buchstaben `A`, `B`, `C`.

const buchstabenSet = new Set(['A', 'B', 'C']);

// Prüfen ob der Buchstabe `D` im Set enthalten ist.

console.log(buchstabenSet.has('D')); // Ausgabe: false

// Erneutes hinzufügen des Buchstabens `A` und Ausgabe der Anzahl der Elemente im Set.

buchstabenSet.add('A');
console.log(buchstabenSet.size); // Ausgabe: 3

