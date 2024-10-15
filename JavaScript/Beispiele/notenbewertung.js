function getGrade() {
    return Math.floor(Math.random() * 6) + 1;
}

function checkGradeWithSwitch() {
    let note = getGrade();
    let bewertung;

    switch (note) {
        case 1:
            bewertung = "Sehr gut";
            break;
        case 2:
            bewertung = "Gut";
            break;
        case 3:
            bewertung = "Befriedigend";
            break;
        case 4:
            bewertung = "Ausreichend";
            break;
        case 5:
            bewertung = "Mangelhaft";
            break;
        case 6:
            bewertung = "Nicht bestanden";
            break;
        default:
            bewertung = "Ungültige Note";
    }

    console.log("Du hast die Note " + note + " erhalten: " + bewertung);
}

function checkGradeWithIfElse() {
    let note = getGrade();
    let bewertung;

    if (note == 1) {
        bewertung = "Sehr gut";
    } else if (note == 2) {
        bewertung = "Gut";
    } else if (note == 3) {
        bewertung = "Befriedigend";
    } else if (note == 4) {
        bewertung = "Ausreichend";
    } else if (note == 5) {
        bewertung = "Mangelhaft";
    } else if (note == 6) {
        bewertung = "Nicht bestanden";
    } else {
        bewertung = "Ungültige Note";
    }

    console.log("Du hast die Note " + note + " erhalten: " + bewertung);
}

checkGradeWithIfElse();
