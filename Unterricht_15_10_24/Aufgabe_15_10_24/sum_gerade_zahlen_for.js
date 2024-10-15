function calcSum() {
    let sum = 0;

    for (let i = 0; i <= 100; i += 2) {
        sum += i;
    }
    
    return sum; 
}

const ergebnisSum = calcSum();
console.log("Die Summe aller geraden Zahlen ist: " + ergebnisSum); 
