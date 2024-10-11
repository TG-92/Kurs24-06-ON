// Zwei Zahlen deklarieren
let num1 = 10;
let num2 = "10";

// Vergleich mit dem == Operator (lose Gleichheit)
let resultLooseEquality = (num1 == num2);
console.log("== Vergleich (lose Gleichheit):", resultLooseEquality); // true

// Vergleich mit dem === Operator (strikte Gleichheit)
let resultStrictEquality = (num1 === num2);
console.log("=== Vergleich (strikte Gleichheit):", resultStrictEquality); // false

// == prüft nur den Wert und konvertiert die Datentypen, falls nötig.
// prüft sowohl den Wert als auch den Datentyp, ohne Konvertierung.