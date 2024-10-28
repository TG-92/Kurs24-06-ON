// asyncrone funktion zum Lesen und Schreiben einer Datei

const fs = require('fs').promises;

async function readAndWrite() {
    try{

        // 1. Lesen der Datei
        const data = fs.readFileSync('beispielTextdatei.txt', 'utf8');
        // 2. Inhalt ändern
        const modifiedData = data.replace(data, 'neuer Text');
        // 3. geänderte Inhalte die in die Datei geschrieben wurden.
        fs.writeFileSync('beispielTextdatei.txt', modifiedData, 'utf8');
        console.log('Es war alles erfolgreich');
    } catch(err) {
        console.error('Es gab einen Fehler beim Bearbeiten der Datei', err);
    }    
};

readAndWrite();