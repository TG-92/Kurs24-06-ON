// function = leitet eine Funktion in JS ein
function getAGE() {
    // floor = macht aus Kommauahlen Ganzzahlen indem
    // die Nachkommastellen gestrichen werden.
    // random = ermittelt eine zUFALLSZAHL ZWISCHEN 0.0 und 0.99 (1).
    return Math.floor(Math.random() * 100)
}

function checkAGE() {
    // Holt sich den Wert aus der Funktion getAge()
    age = getAGE();
    console.log("Dein Alter ist:" + age);

    if (age <= 18) {
        console.log("Du bist minderjährig!")
    } else if (age >=67){
        console.log("Du befindest dich in der wohlverdienten Rente!") 
    } else {
        console.log("Du bist Erwachsen!")
    }
}

//Funktionsaufruf 
checkAGE();