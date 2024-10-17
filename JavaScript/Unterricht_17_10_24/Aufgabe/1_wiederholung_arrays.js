// Erstellen eines Arrays namens autos, welche die Werte "BMW", "Audi" und "Mercedes" enthält.

const autos = ["BMW", "Audi", "Mercedes"];

// Zugreifen auf das zweite Element und Ausgabe von diesem.

console.log(autos[1]); // Ausgabe: Audi

// Hinzufügen eines neuen Elementes "Volkswagen" und Ausgabe von allen Elementen.

autos.push("Volkswagen");
console.log(autos); // Ausgabe: ["BMW", "Audi", "Mercedes", "Volkswagen"]


// Iterierung über das Array und Ausgabe der Elemente in Großbuchstaben.

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i].toUpperCase());
}
