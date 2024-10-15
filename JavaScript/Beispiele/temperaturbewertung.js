// Funktion zur Ermittlung einer zufälligen Temperatur zwischen -20 und 40 Grad
function getTemperature() {
    return Math.floor(Math.random() * 61) - 20; // Temperatur zwischen -20 und 40
}

// Funktion zur Überprüfung der Temperatur mit einer if-else-Anweisung
function checkTemperatureWithIfElse() {
    let temperature = getTemperature(); // Holt eine zufällige Temperatur
    let bewertung; // Variable zur Bewertung der Temperatur

    // Überprüfen der Temperatur und Zuweisung einer Bewertung
    if (temperature < 0) {
        bewertung = "Es ist sehr kalt"; // Bewertung für Temperaturen unter 0 Grad
    } else if (temperature >= 0 && temperature <= 15) { 
        bewertung = "Es ist kühl"; // Bewertung für Temperaturen zwischen 0 und 15 Grad
    } else if (temperature >= 16 && temperature <= 25) {
        bewertung = "Es ist angenehm warm"; // Bewertung für Temperaturen zwischen 16 und 25 Grad
    } else if (temperature > 25) {
        bewertung = "Es ist heiß"; // Bewertung für Temperaturen über 25 Grad
    }

    console.log("Die Temperatur beträgt " + temperature + " Grad: " + bewertung); // Ausgabe der Temperatur und Bewertung
}

// Funktion zur Überprüfung der Temperatur mit einer switch-case-Anweisung
function checkTemperatureWithSwitch() {
    let temperature = getTemperature(); // Holt eine zufällige Temperatur
    let bewertung; // Variable zur Bewertung der Temperatur

    // Verwenden einer switch-case-Anweisung zur Bewertung der Temperatur
    switch (true) {
        case (temperature < 0): // Fall für Temperaturen unter 0 Grad
            bewertung = "Es ist sehr kalt"; 
            break;
        case (temperature >= 0 && temperature <= 15): // Fall für Temperaturen zwischen 0 und 15 Grad
            bewertung = "Es ist kühl"; 
            break;
        case (temperature >= 16 && temperature <= 25): // Fall für Temperaturen zwischen 16 und 25 Grad
            bewertung = "Es ist angenehm warm"; 
            break;
        case (temperature > 25): // Fall für Temperaturen über 25 Grad
            bewertung = "Es ist heiß"; 
            break;
        default: // Standardfall, sollte nicht erreicht werden
            bewertung = "Ungültige Temperatur"; 
    }

    console.log("Die Temperatur beträgt " + temperature + " Grad: " + bewertung); // Ausgabe der Temperatur und Bewertung
}

// Funktion zur Interpretation des Wetters und Vorschlag einer Aktivität
function interpretiereWetter(wetterlage) {
    let aktivität; // Variable zur Speicherung der vorgeschlagenen Aktivität

    // Verwenden einer switch-case-Anweisung zur Bestimmung der Aktivität basierend auf der Wetterlage
    switch (wetterlage) {
        case "Sonnig": // Fall für sonniges Wetter
            aktivität = "Gehe spazieren"; // Vorschlag für sonniges Wetter
            break;
        case "Regnerisch": // Fall für regnerisches Wetter
            aktivität = "Bleibe zu Hause und lese ein Buch"; // Vorschlag für regnerisches Wetter
            break;
        case "Schnee": // Fall für schneebedecktes Wetter
            aktivität = "Baue einen Schneemann"; // Vorschlag für schneebedecktes Wetter
            break;
        case "Windig": // Fall für windiges Wetter
            aktivität = "Fliege einen Drachen"; // Vorschlag für windiges Wetter
            break;
        default: // Standardfall, wenn keine der oben genannten Wetterlagen zutrifft
            aktivität = "Keine Aktivität vorgeschlagen"; // Keine Aktivität
    }

    console.log("Aktivität für " + wetterlage + ": " + aktivität); // Ausgabe der Wetterlage und vorgeschlagene Aktivität
}

checkTemperatureWithSwitch();
