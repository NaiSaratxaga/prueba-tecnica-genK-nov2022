'use strict';
/* Dados los arrays de arrays array1 y array2 obtén un nuevo array llamado result que sea el resultado de multiplicar las filas de primero por las columnas del segundo*/
/* Multiplicación de matrices 3x3 y nos da una nueva matriz de 3x3(result) (A*B=C) */
/* ejemplo : primera fila por primera columna, elemento por elemento (1*2+3*8+5*6=56 / 3*2+3*10+5*4=54) / 1*6+3*8+5*2=40*/
/* primer resultado sería [56, 54, 40] segundo [128,146,128] y 3 resultado [40,54,56]*/

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
console.log('result:', result);
