const lcs = (x, y, string1, string2) => {
  // LCS[i, j] = max of all LCS[k][l] + 1 where k & l < i & j
  let max = 0;
  const table = [];

  for(let i = 0; i < string1.length; i++) {
    table[i] = [];
    for(let j = 0; j < string2.length; j++) {
      if(string1[i] === string2[j]) {
        if(table[i - 1] && typeof table[i - 1][j - 1] !== "undefined") {
          table[i][j] = Math.max(max, table[i - 1][j - 1] + 1);
        } else {
          table[i][j] = Math.max(max, 1);
        }
      } else {
        if(table[i - 1] && typeof table[i - 1][j - 1] !== "undefined") {
          table[i][j] = Math.max(max, table[i - 1][j - 1]);
        } else {
          table[i][j] = Math.max(max, 0);
        }
      }
      max = Math.max(table[i][j], max);  
    }
  }
  return max;
}


// console.log(lcs(3, 4, "ABACD", "BCDEF")); // 4
// console.log(lcs(3, 4, "ABCD", "ABC")); // 4

console.log(lcs(3, 4, "GEBEOCFUFTSXDIXTIGSIEEHKCHZ", "DFLILRJQFNXZ")); // 4