const map = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const combineList = (list1, list2) => {
  if(Array.isArray(list1) && Array.isArray(list2)){
    return list1.reduce((acc, list1Item) => {
      list2.forEach(list2Item => {
        acc.push(`${list1Item}${list2Item}`);
      });
      return acc;
    }, []);
  } else if(Array.isArray(list1)) {
    return list1;
  } else if(Array.isArray(list2)) {
    return list2;
  }
  return [];
}

const letterCombinations = (digits) => {
  if(!digits.length) {
    return [];
  }
  let result = map[digits[0]];
  digits = digits.substring(1);
  while(digits.length) {
    result = combineList(result, map[digits[0]]);
    digits = digits.substring(1);
  }
  return result;
};

console.log(letterCombinations('2345678923'));