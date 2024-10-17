// Erstellen eines `Set` namens `farbenSet` mit den Farben `Gelb`, `Grün`, `Blau`.

const farbenSet = new Set(['Gelb', 'Grün', 'Blau']);

// Iterieren mit einer for...of Schleife und Ausgabe jeder Farbe im Format "Farbe: [Farbe]".

for (const farbe of farbenSet) {
  console.log(`Farbe: ${farbe}`);
}
