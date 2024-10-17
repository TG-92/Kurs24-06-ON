// Erstellen einer Funktion namens `zeigeBuecher`, die als Parameter eine `Map` von
// Büchern erhält und jedes Buch im Format "Titel: Autor, Seiten" ausgibt.

function zeigeBuecher(buecher) {
  // Iteriere über die Bücher-Map
  for (const [titel, { autor, seiten }] of buecher.entries()) {
    // Gib den Buch im Format "Titel: Autor, Seiten" aus
    console.log(`${titel}: ${autor}, ${seiten}`);
  }
}

// buecherMap aus Aufgabe 6
const buecherMap = new Map([
    ['Der Alchemist', { autor: 'Paolo Coelho', seitenanzahl: 198 }],
    ['Ist Tim Gott?', { autor: 'Rudi Ostrhaudrfehn', seitenanzahl: 1337 }],
    ['Ich habe Gott getroffen', { autor: 'Maxl Bonksl', seitenanzahl: 420 }]
  ]);

// Nutzen der `zeigeBuecher`Funktion mit der buecherMap.

zeigeBuecher(buecherMap);
