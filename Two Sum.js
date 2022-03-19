var twoSum = function (nums, target) {
  let indexes = [];
  for (let i = 0; i < nums.length; ++i) {
    let search = target - nums[i];
    for (let j = i + 1 ; j < nums.length; ++j) {
      if (nums[j] === search) {
        indexes.push(i,j);
        break;
      }
    }
  }
  return indexes;
};

