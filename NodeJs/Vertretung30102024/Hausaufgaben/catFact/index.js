import inquirer from 'inquirer';
import boxen from 'boxen';
import catFacts from 'cat-facts';
import chalk from 'chalk';

// Username Abfragen 

async function Usernamecheck() {
    const answer = await inquirer.prompt({type: "input", name: "username", message: "Wie heißt Du?",})
    console.log (answer.username)
    
    return answer.username; // Benutzername wird ausgegeben.
}

// Erstellen der Cat-Facts Funktion

async function showCatFact() {

    const fact = catFacts.random(); // Zufälliger Katzenfakt wird aufgerufen
    const CatBox = boxen(chalk.red(fact), { padding: 1, // Mit chalk wird aufgerufen und das Zitat Rot angezeigt.
    margin: 1, borderStyle: 'double' });
    console.log(CatBox); // Zitat in einer Box anzeigen
}

async function askForNewQuote() {
    const answers = await inquirer.prompt([
    {
    type: 'confirm',
    name: 'showCatFacts',
    message: 'Bock auf n`Cat Fact?',
    default: true,
    },
    ]);
    // 1. Wenn der Benutzer "Ja" wählt, zeige ein Zitat an
    // 2. Wenn der Benutzer "Nein" wählt, beende das Programm
    if (answers.showCatFacts) {
    showCatFact(); // Zitat anzeigen
    askForNewQuote();
    } else {
    console.log(chalk.yellow('Bis zum Miaoschsten mal <3'));
    process.exit(0); // Programm beenden
 }
    }

async function main() {

    const username = await Usernamecheck();
    console.log("Hallo " + username + ", Willkommen im CatFact-Tool!");
    await askForNewQuote();
    
}

main();