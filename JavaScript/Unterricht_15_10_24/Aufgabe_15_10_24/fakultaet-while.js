function fakultaet(n) {
    let result = 1;

    let i = 1;
    while (i <= n) {
        result *= i;
        i++;
    }
    return result;
}

console.log(fakultaet(5));