const fs = require('fs');

const content = 'Den Text habe ich einfügen lassen';

fs.writeFile('beispielTextdatei.txt', content, 'utf8', err => {
    if(err) {
        console.error('Es gab einen beim Schreiben der Datei',);
        return;
    }
    console.log('Datei wurde erfolgreich beschrieben');
})

fs.readFile('beispielTextdatei.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Es gab einen Fehler beim Lesen der Datei');
        return;
    }
    console.log(data);
})
