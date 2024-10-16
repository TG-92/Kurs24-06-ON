
const zahlenarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Erstellen eines Arrays mit den Ziffern 1 bis 10.
console.log(zahlenarray); // Ausgeben des Arrays.

zahlenarray.push(11); // Hinzufuegen der Ziffer 11.
console.log(zahlenarray); // Ausgeben des Arrays.

zahlenarray.shift(); // Entfernen des ersten Elements, also der Ziffer 1.
console.log(zahlenarray); // Ausgeben des Arrays.

let slicedzahlenarray = zahlenarray.slice(3,4); // Teilen des Arrays ab Stelle 3 bis Stelle 4.
console.log(slicedzahlenarray); // Ausgeben des Arrays.

// Prüfen ob die Zahl 7 in dem Array vorhanden ist.

if (zahlenarray.includes(7)) {
    console.log("Die Zahl 7 ist im Array vorhanden.");
}