const isPalindrom = (string) => {
  let i = 0;
  let j = string.length - 1;
  while (j > i) {
    if (string[i] !== string[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = (s) => {
  const result = [[s.split("")]];
  const queue = [[s.split("")]];
  while (queue.length) {
    const newSolution = [];
    const currentSolution = queue.pop();
    
  }
};
