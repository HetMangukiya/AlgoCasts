// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function createEmptyMatrix(n) {
  return Array.from({ length: n }, (row) =>
    Array.from({ length: n }, () => null),
  );
}

function getValueAt(matrix, row, column) {
  return matrix?.[row]?.[column];
}

function getNextDirection(currentDirection, matrix, row, column, n) {
  let newDirection = currentDirection;
  if (
    currentDirection == 'right' &&
    (getValueAt(matrix, row, column + 1) !== null || column === n - 1)
  ) {
    newDirection = 'down';
  } else if (
    currentDirection == 'down' &&
    (getValueAt(matrix, row + 1, column) || row === n - 1)
  ) {
    newDirection = 'left';
  } else if (
    currentDirection == 'left' &&
    (getValueAt(matrix, row, column - 1) || column === 0)
  ) {
    newDirection = 'up';
  } else if (
    currentDirection == 'up' &&
    (getValueAt(matrix, row - 1, column) || row === 0)
  ) {
    newDirection = 'right';
  }

  return newDirection;
}

function matrix(n) {
  const matrix = createEmptyMatrix(n);
  // up down left right
  let direction = 'right';

  let currentIdx = [0, 0];
  let row = 0;
  let column = 0;
  for (let i = 1; i <= n * n; i++) {
    matrix[row][column] = i;

    direction = getNextDirection(direction, matrix, row, column, n);

    if (direction == 'right') {
      column++;
    }
    if (direction == 'down') {
      row++;
    }
    if (direction == 'left') {
      column--;
    }
    if (direction == 'up') {
      row--;
    }
  }

  return matrix;
}

// for (let line of matrix(10)) {
//   let string = '';

//   for (const element of line) {
//     string += `${element.toString().padEnd((10 * 10).toString().length, ' ')} `;
//   }

//   console.log(string);
// }

module.exports = matrix;
