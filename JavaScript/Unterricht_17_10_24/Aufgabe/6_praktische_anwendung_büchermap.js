// Erstellen einer `Map`namens `buecherMap`, die Informationen über drei Bücher
// speichert (Titel als Schlüssel und Objekt mit Autor und Seitenanzahl als Wert).

const buecherMap = new Map([
  ['Der Alchemist', { autor: 'Paolo Coelho', seitenanzahl: 198 }],
  ['Ist Tim Gott?', { autor: 'Rudi Ostrhaudrfehn', seitenanzahl: 1337 }],
  ['Ich habe Gott getroffen', { autor: 'Maxl Bonksl', seitenanzahl: 420 }]
]);

// Zugriff auf die Seitenanzahl des Buches `Der Alchemist`

console.log(buecherMap.get('Der Alchemist').seitenanzahl); // Output: 198

// Iterierung über `buecherMap`und Ausgabe sämtlicher Eigenschaften.

for (const [titel, { autor, seitenanzahl }] of buecherMap) {
  console.log(`Titel: ${titel}, Autor: ${autor}, Seitenanzahl: ${seitenanzahl}`);
}
