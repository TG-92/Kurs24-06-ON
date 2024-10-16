// Wie haben wir bisher Arrays angelegt?

// Ein leeres Array
const leeresarray = [];

// Ein einfaches Zahlen-Array
// Array hat eine Laenge von 5
// Indizes: 0 - 4
const zahlenarray = [1, 2, 3, 4, 5];

// Ein einfaches String-Array
const namen = ["ahmet", "brian", "steven", "ivonne"];

console.log(namen[0]); // Stelle 0 ist mit Ahmet belegt. Merke, in der IT zählt man ja grundsätzlich von 0 an.
console.log(namen[1]); // Stelle 1 ist mit Brian belegt.
console.log(zahlenarray[3]); // Stelle 3 greift nun auf das array zu! Hier ist die 4 hinterlegt.

// Befüllen von Arrays
namen.push("marcel"); // Fügt Marcel
zahlenarray.push(6); // Fügt die Ziffer 6 hinzu
leeresarray.push("Hund"); // Fügt "Hund" hinzu
namen.push("iman", "jeffrey", "rudi", "markus", "katharina");
console.log(namen);
console.log(zahlenarray); 
console.log(leeresarray); 

// Entfernen des letzten Elementes aus einem Array
// Das letzte Element eines Arrays muss nicht angegeben werden.
// namen.pop(katharina);
namen.pop();

// zahlenarray.pop(6);
zahlenarray.pop();

// leeresarray.pop("Hund");
leeresarray.pop();

console.log(namen);
console.log(zahlenarray);
console.log(leeresarray);


// Splice kann Elemente in einem Array entfernen.
// Es muessen immer Start- und Endwerte angegeben werden.
// namen.splice(2);
// console.log(namen);


// Unshift fuegt Elemente an den Anfang eines Arrays hinzu.
namen.unshift("alper", "stefan", "patrick");
console.log(namen);

// Shift entfernt immer das erste Element aus einem Array.
namen.shift();
console.log(namen);

// CALLBACKS 
// Soll die Elemente eines Arrays einzeln ausgeben.
namen.forEach(namen => {
    console.log(namen);
});

// Manipulation                      // mit namne.slice(2, 5); werden die stellen 2 BIS 5 ausgegeben.
let slicednamen = namen.slice(2, 5); // Die Ausgabe hier erfolgt als neues Array, Erkenne ich bei der Ausgabe schon an den Eckigen Klammern herum.
console.log(slicednamen);
