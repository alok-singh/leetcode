const helper = function (board, word, i, j, index, visited) {
  console.log('callStack', board[i][j], word[index]);
  if (visited[i][j]) {
    return false;
  }
  if (board[i][j] === word[index]) {
    console.log('in');
    visited[i][j] = true;
    if (!word[index + 1]) {
      console.log('return');
      return true;
    }
    const result =
      (i + 1 < board.length &&
        helper(board, word, i + 1, j, index + 1, visited)) ||
      (j + 1 < board[i].length &&
        helper(board, word, i, j + 1, index + 1, visited)) ||
      (i - 1 >= 0 && helper(board, word, i - 1, j, index + 1, visited)) ||
      (j - 1 >= 0 && helper(board, word, i, j - 1, index + 1, visited));
    visited[i][j] = false;
    return result;
  } else {
    return false;
  }
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const visited = [];
  for (let i = 0; i < board.length; i++) {
    visited[i] = [];
    for (let j = 0; j < board[0].length; j++) {
      visited[i][j] = false;
    }
  }
  let result = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        result = result || helper(board, word, i, j, 0, visited);
      }
    }
  }
  return result;
};

// console.log(
//   exist(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "ABCB"
//   )
// );

// console.log(
//   exist(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "SEECCE"
//   )
// );

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
