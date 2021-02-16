const helperFunction = (string, dictionary, memo) => {
  // console.log(string);
  if (typeof memo[string] !== 'undefined') {
    return memo[string];
  }
  if (dictionary[string]) {
    return true;
  }
  let result = false;
  for (let i = 0; i < string.length; i++) {
    const tryString = string.substring(0, i);
    if (dictionary[tryString]) {
      const currentResult = helperFunction(string.substring(tryString.length), dictionary, memo);
      memo[string] = currentResult;
      if(currentResult) {
        return currentResult;
      }
      result = result || currentResult;
    }
  }
  memo[string] = result;
  return result;
};

const wordBreak = (string, dictionary) => {
  return helperFunction(
    string,
    dictionary.reduce((acc, item) => {
      acc[item] = true;
      return acc;
    }, {}),
    {}
  );
};

const testCases = [
  {
    string: "aloka",
    dictionary: ["a", "lok"],
    result: true,
  },
  {
    string: "fastcar",
    dictionary: ["car", "fas", "t"],
    result: true,
  },
  {
    string: "leetcode",
    dictionary: ["leet", "code"],
    result: true,
  },
  {
    string: "applepenapple",
    dictionary: ["apple", "pen"],
    result: true,
  },
  {
    string: "catsandog",
    dictionary: ["cats", "dog", "sand", "and", "cat"],
    result: false,
  },
  {
    string:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    dictionary: [
      "a",
      "aa",
      "aaa",
      "aaaa",
      "aaaaa",
      "aaaaaa",
      "aaaaaaa",
      "aaaaaaaa",
      "aaaaaaaaa",
      "aaaaaaaaaa",
    ],
    result: false,
  }
];

for (let test of testCases) {
  if(wordBreak(test.string, test.dictionary) === test.result) {
    console.log('pass');
  } else {
    console.log('fail');
    console.log(test);
  }
}
