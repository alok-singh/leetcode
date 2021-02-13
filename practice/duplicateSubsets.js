const helper = (nums, currentIndex = 0) => {
  if (currentIndex === nums.length) {
      return [[]];
  }
  const selectWays = helper(nums, currentIndex + 1);
  return [...selectWays, ...(selectWays.map(subArr => subArr.concat(nums[currentIndex])))];
};

const subsetsWithDup = (nums) => {
  const result = helper(nums);
  const addedHashMap = {};
  return result.filter(item => {
      const key = item.sort((a, b) => a - b).join('-');
      if(addedHashMap[key]) {
        return false;
      }
      addedHashMap[key] = true;
      return true;
  });
}

/**
[1,2,3,3,4]
first backtracking
[
  [], 
  [4]
]

second backtracking
[
  [], [4],
  [3], [3, 4],
]

third backtracking
[
  [], [4], [3], [3, 4],
  [3], [4, 3], [3, 3], [3, 4, 3],
]   
* */

console.log(subsetsWithDup([1,1]));