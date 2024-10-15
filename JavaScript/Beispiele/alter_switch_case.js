// function = leitet eine Funktion in JS ein
function getAGE() {
    // floor = macht aus Kommauahlen Ganzzahlen indem
    // die Nachkommastellen gestrichen werden.
    // random = ermittelt eine zUFALLSZAHL ZWISCHEN 0.0 und 0.99 (1).
    return Math.floor(Math.random() * 100);
}
function checkAge() { 
    //Holt sich den Wert aus der Funktion getAge
    age = getAge();
    console.log("Dein Alter ist:" + age);

    switch (true) {
        case (age < 18):
            console.log("Du bist minderjährig!");
            break;
        case (age >=18 && age <= 66):
            console.log("Du bist erwachsen!");
            break;
        case (age >= 67):
            console.log("Du bist im Rentenalter!");
            break;
        default:
            console.log("Du bist älter als 67 Jahre!");
    }

}

// Funktionsaufruf

checkAge();