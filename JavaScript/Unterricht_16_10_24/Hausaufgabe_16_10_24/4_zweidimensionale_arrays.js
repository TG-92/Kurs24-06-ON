// Erstellung eines 2D-Arrays, das eine 3x3-Matrix repräsentiert die mit den Zahlen 1 bis 9 befüllt ist.

let matrix = Array.from({ length: 3 }, () => Array(3).fill(0));
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    matrix[i][j] = i * 3 + j + 1;
  }
}

// Ausgabe der Matrix

console.log("Matrix:");
matrix.forEach(row => console.log(row));

// Berechnung der Diagonalsumme von oben links nach unten rechts.

let diagonalSum = 0;
for (let i = 0; i < 3; i++) {
  diagonalSum += matrix[i][i];
}

console.log("Die Diagonalsumme von oben links nach unten rechts beträgt: ", diagonalSum);

// Mit Callback die erste Matrix verwandeln so dass Nullen in den Ecken vorhanden sind.

function replaceZeroes(matrix, callback) {
  matrix.forEach((row, rowIndex) => {
    row.forEach((element, columnIndex) => {
      if (rowIndex === 0 || rowIndex === 2 || columnIndex === 0 || columnIndex === 2) {
        callback(matrix, rowIndex, columnIndex, 0);
      }
    });
  });
}

// Matrix anzeigen

console.log("\nMatrix nach Änderung:");
replaceZeroes(matrix, (matrix, rowIndex, columnIndex, value) => {
  matrix[rowIndex][columnIndex] = value;
});
matrix.forEach(row => console.log(row));

