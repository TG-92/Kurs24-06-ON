
const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  
  input: process.stdin,

  output: process.stdout,

});
    rl.frage("wie soll der ordner heißen? "), (ordnername) => {
    rl.frage ("Was soll in die nachricht?"), (nachricht)
    fs.mkdir(ordnername)
    rl.close();

return;

};
const pfad = `${ordnername}/nachricht.txt`
fs.writeFile(pfad, nachricht)
rl.close(); 


// Geht nicht. Muss man sich mal durchwuseln wenn man Lust drauf hat. 