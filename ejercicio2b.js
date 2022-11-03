'use strict';
/* Convierte el array **result** en un array de strings con números de 3 cifras y completando con ceros a la izquierda los números que tengan menos de 3 cifras.
 */

const array1 = [
  [1, 3, 5],
  [7, 9, 7],
  [5, 3, 1],
];

const array2 = [
  [2, 4, 6],
  [8, 10, 8],
  [6, 4, 2],
];

function multiply() {
  const result = [[], [], []];

  // For each row in A1
  for (let rowInA1Index = 0; rowInA1Index < 3; rowInA1Index++) {
    const rowA1 = array1[rowInA1Index];

    // For each column in A2
    for (let columInA1Index = 0; columInA1Index < 3; columInA1Index++) {
      const columnA2 = [
        array2[0][columInA1Index],
        array2[1][columInA1Index],
        array2[2][columInA1Index],
      ];

      // Multiply row * colums
      const first = rowA1[0] * columnA2[0];
      const second = rowA1[1] * columnA2[1];
      const third = rowA1[2] * columnA2[2];

      // Collect results
      result[rowInA1Index][columInA1Index] = first + second + third;
    }
  }

  return result;
}

const result = multiply();

const resultCombined = result.flat();
const resultCombinedWithStrings = resultCombined.map((number) =>
  number.toString().padStart(3, 0)
);

console.log(resultCombinedWithStrings);
