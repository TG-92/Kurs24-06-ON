// Erstellen einer Map namens stadtMap.

const stadtMap = new Map(); // Map namens stadtMap.

// Hinzufügen folgender Paare   `Berlin`: `Deutschland`
// Der                          `Paris`: `Frankreich`

stadtMap.set('Berlin', 'Deutschland');
stadtMap.set('Paris', 'Frankreich');

// Zugreifen auf den Wert des Schlüssels `Berlin` und Ausgabe von diesem.

const berlinLand = stadtMap.get('Berlin');
console.log(berlinLand); // Ausgabe: Deutschland

// Überprüfen, ob der der Schlüssel `Rom`in der Map existiert.

console.log(stadtMap.has('Rom')); // Ausgabe: false

// Aufgabe 3 // 

// Erweiterung der stadtMap um `Rom`: `Italien`

stadtMap.set('Rom', 'Italien');

// Iterierung mit .forEach() und Ausgabe jeden Paares im Format "Stadt: Land"

stadtMap.forEach((land, stadt) => {
    console.log(`${stadt}: ${land}`);
});
