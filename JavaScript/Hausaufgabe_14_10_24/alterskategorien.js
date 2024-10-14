// Funktion zur Ermittlung eines zufälligen Alters
function getAGE() {
    // Math.floor wandelt Dezimalzahlen in Ganzzahlen um
    // Math.random generiert eine Zufallszahl zwischen 0 (inklusiv) und 1 (exklusiv)
    return Math.floor(Math.random() * 100); // Altersbereich 0 bis 99
}

// Funktion zur Bestimmung der Alterskategorie
function bestimmeKategorie(age) {
    // Überprüfen des Alters und Bestimmung der Kategorie
    if (age >= 0 && age <= 12) { // Wenn das Alter zwischen 0 und 12 ist
        return "Kind"; // Kategorie ist "Kind"
    } else if (age >= 13 && age <= 17) { // Wenn das Alter zwischen 13 und 17 ist
        return "Jugendlicher"; // Kategorie ist "Jugendlicher"
    } else if (age >= 18 && age <= 64) { // Wenn das Alter zwischen 18 und 64 ist
        return "Erwachsener"; // Kategorie ist "Erwachsener"
    } else if (age >= 65) { // Wenn das Alter 65 oder älter ist
        return "Senior"; // Kategorie ist "Senior"
    } else {
        return "Ungültiges Alter"; // Für alle anderen Fälle (negative Werte)
    }
}

// Funktion zur Überprüfung und Ausgabe des Alters und der Kategorie
function checkAGE() {
    // Holt sich den Wert aus der Funktion getAGE()
    var age = getAGE(); // Verwendung von var, um die Variable lokal zu machen
    console.log("Dein Alter ist: " + age); // Gibt das Alter aus

    // Bestimme die Alterskategorie und gebe sie aus
    var kategorie = bestimmeKategorie(age); // Aufruf der Funktion bestimmeKategorie
    console.log("Du gehörst zur Kategorie: " + kategorie); // Gibt die Kategorie aus
}

// Funktionsaufruf 
checkAGE(); // Führt die Funktion checkAGE aus
