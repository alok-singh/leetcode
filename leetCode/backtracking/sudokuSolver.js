const findEmptySlot = (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      if (board[row][column] === ".") {
        return [row, column];
      }
    }
  }
  return [-1, -1];
};

const isBoardPositionValid = (board, inputRow, inputColumn, value) => {
  // check the rows
  for (let row = 0; row < board.length; row++) {
    if (board[row][inputColumn] === value && inputRow !== row) {
      return false;
    }
  }

  // check column
  for (let column = 0; column < board.length; column++) {
    if (board[inputRow][column] === value && column !== inputColumn) {
      return false;
    }
  }

  // check subgrid
  const subGridSize = 3;
  const subGridStartRow = inputRow - (inputRow % subGridSize);
  const subGridStartColumn = inputColumn - (inputColumn % subGridSize);

  for (let row = subGridStartRow; row < subGridStartRow + subGridSize; row++) {
    for (let column = subGridStartColumn; column < subGridStartColumn + subGridSize; column++) {
      if (
        board[row][column] === value &&
        inputRow !== row &&
        inputColumn !== column
      ) {
        return false;
      }
    }
  }

  return true;
};

const printBoard = (board) => {
  console.log("-------------------------------------------");
  board.forEach((row) => {
    console.log(row.join("  "));
  });
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = (board) => {
  printBoard(board);
  
  // find empty slot
  const [emptyRow, emptyColumn] = findEmptySlot(board);
  // if no empty slot found stop
  if (emptyRow === -1 && emptyColumn === -1) {
    return board;
  }

  // else fill all possible values with contrains to that slot and pass it on
  for (let value = 1; value <= 9; value++) {
    if (isBoardPositionValid(board, emptyRow, emptyColumn, `${value}`)) {
      board[emptyRow][emptyColumn] = `${value}`;
      const solution = solveSudoku(board);
      if (solution !== -1) {
        return solution;
      } else {
        board[emptyRow][emptyColumn] = ".";
      }
    }
  }

  return -1;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(solveSudoku(board));

// console.log(isBoardPositionValid(board, 0, 3, "4")); // false
// console.log(isBoardPositionValid(board, 0, 3, "9")); // false 
// console.log(isBoardPositionValid(board, 0, 3, "5")); // false
// console.log(isBoardPositionValid(board, 0, 3, "8")); // false



// console.log(isBoardPositionValid(board, 3, 3, "3")); // false
// console.log(isBoardPositionValid(board, 3, 3, "2")); // false 
// console.log(isBoardPositionValid(board, 3, 3, "6")); // false
// console.log(isBoardPositionValid(board, 3, 3, "8")); // false
// console.log(isBoardPositionValid(board, 3, 3, "1")); // true
