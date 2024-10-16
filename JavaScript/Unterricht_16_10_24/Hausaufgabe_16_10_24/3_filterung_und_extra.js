// Verwenden von filter() und reduce().

// Erstellung eines Arrays mit mindestens 20 zufällig generierten Zahlen zwischen 1 und 100.

const zufaelligezahlen = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
console.log(zufaelligezahlen);

// Verwendung von filter() um alle geraden Zahlen in ein neues Array zu filtern.

const geradeZahlen = zufaelligezahlen.filter(zahl => zahl % 2 === 0);
console.log(geradeZahlen);

// Berechnung der Summe aller geraden Zahlen mit reduce().

const summeGeradeZahlen = geradeZahlen.reduce((summe, zahl) => summe + zahl, 0);
console.log(summeGeradeZahlen);
