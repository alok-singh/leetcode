const sumArr = (arr) => {
  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* const canPartition = (nums, partASum = 0, partBSum = 0) => {
  if (nums.length === 0) {
    if (partASum === partBSum) {
      return true;
    }
    return false;
  }
  for (let i = 0; i < nums.length; i++) {
    let subArray = nums.slice(i + 1);
    let resultA = canPartition(subArray, partASum + nums[i], partBSum);
    let resultB = canPartition(subArray, partASum, partBSum + nums[i]);
    if (resultA || resultB) {
      return true;
    }
  }
  return false;
}; */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = nums => {
  // bottom approach 
  // need to sum upto total/2
  // CP(goal) = CP(goal - A[i]) i varies from 0 to nums.length all in OR
  // CP(0) = true;
  // CP(-ve) = false;
  const total = nums.reduce((acc, item) => acc + item, 0);
  if(total % 2 !== 0) {
    return false;
  }
  const goal = total/2;
  const CP = new Array(goal + 1).fill(false);
  CP[0] = true;
  
  for(let i = 0; i < nums.length; i++) {
    // for every number we find its complement is true or not
    // looping in reverse will guarentee every number is used only once
    // we find upto which goal we can generate the sum using this number
    for(let currentGoal = goal; currentGoal >= nums[i]; currentGoal--) {
      CP[currentGoal] = CP[currentGoal] || CP[currentGoal - nums[i]];
    }
  }
  return CP[goal];
};

/* 

brut force back-tracking
const helper = (nums, goal) => {
  if(goal === 0) {
    return true;
  }
  if(goal < 0) {
    return false;
  }
  for(let i = 0; i < nums.length; i++){
    const slicedList = nums.slice(i + 1);
    const result = helper(slicedList, goal - nums[i]) || helper(slicedList, goal);
    if(result) {
      return true;
    }
  }
  return false;
}

const canPartition = (nums) => {
  // S(i) = S(i - 1) + nums[i] or S(i - 1)
  const totalSum = nums.reduce((acc, item) => acc + item, 0);
  if(totalSum % 2 !== 0) {
    return false;
  }
  return helper(nums, totalSum/2);
} 

*/

const testCases = [
  {
    array: [1,2,3],
    result: true
  },
  {
    array: [1,2,3,2],
    result: true
  },
  {
    array: [1,2,3,7],
    result: false
  },
  {
    array: [1,2,3,8],
    result: false
  },
  {
    array: [1,5,11,5],
    result: true
  },
  {
    array: [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3],
    result: true
  },
  {
    array: [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,97],
    result: false
  }
];

for (let test of testCases) {
  let result = canPartition(test.array);
  if (result === test.result) {
    console.log("pass");
  } else {
    console.log("fail");
    console.log({ test, result });
  }
}