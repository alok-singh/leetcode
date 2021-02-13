const permute_a = (nums) => {
  if (nums.length === 0) return [[]];

  const resultList = [];
  for (let i = 0; i < nums.length; i++) {
    let result = permute_a(nums.filter((item) => item !== nums[i]));
    result = result.map((item) => {
      item.push(nums[i]);
      return item;
    });
    resultList.push(...result);
  }
  return resultList;
};

const permute_b = (nums, memo = {}) => {
  // console.log(memo);
  const key = nums.join("-");
  if (nums[key]) return memo[key];
  if (nums.length === 0) return [[]];

  const resultList = [];
  for (let i = 0; i < nums.length; i++) {
    let removed = false;
    let result = permute_b(
      nums.filter((item) => {
        if (item === nums[i] && !removed) {
          removed = true;
          return false;
        }
        return true;
      }),
      memo
    );
    result = result.map((item) => {
      item.push(nums[i]);
      return item;
    });
    resultList.push(...result);
  }
  memo[key] = resultList;
  return resultList;
};

const permute = (nums, memo = {}) => {
  const key = nums.join("-");
  if (nums[key]) return memo[key];
  if (nums.length === 0) return [[]];

  const resultList = [];
  for (let i = 0; i < nums.length; i++) {
    let removed = false;
    let result = permute(
      nums.filter((item) => {
        if (item === nums[i] && !removed) {
          removed = true;
          false;
        }
        true;
      }),
      memo
    );
    result = result.map((item) => {
      item.push(nums[i]);
      return item;
    });
    resultList.push(...result);
  }
  memo[key] = resultList;
  return resultList;
};

// console.log(permute_a([0, 1])); // [[0, 1], [1, 0]]
console.log(permute_b([1, 1, 3]));
