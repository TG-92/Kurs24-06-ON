fs = require ('fs').promises;
readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const frage = (text) => {
    return new Promise((resolve) => rl.question(text, resolve)
)};

async function main() {
    try {
        // Frage den Benutzer nach einem Ordnernamen und einer nachricht.
        const ordnername = await frage('Geben Sie den Namen für den Ordner ein: ');
        // Fragen den Benutzer nach einer Nachricht.
        const nachricht = await frage('Geben Sie die Nachricht ein: ');
    try {
        await fs.access(ordnername); // Prüfen ob der Ordner existiert.
        console.log('Ein Ordner mit diesem Namen existiert bereits.');
    } catch {
        await fs.mkdir(ordnername); // Erstellen des Ordners falls dieser nicht existiert.
        console.log(`Name des Ordners wurde erstellt und lautet: ${ordnername}`);
    }
     pfad = `${ordnername}/nachricht.txt`; // Pfad zur neuen Datei.
    await fs.writeFile(pfad, nachricht); // Schreibt die Nachricht in die Datei.
    console.log(`Die Nachricht wurde erfolgreich in ${pfad} geschrieben.`);
    } catch (error) {
    console.error(`Es ist ein Fehler aufgetreten: ${error.message}`); // Beendet die interaktive Konsole.
    } finally {
    rl.close(); // Beendet das readline-Interface.
    }
}; 

main(); // Starten der Hauptfunktion "main".

