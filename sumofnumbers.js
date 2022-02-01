const test = [1, 2, 3];

function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

function sumRecursion(nums) {
  if (nums.length > 1) {
    return sumRecursion(nums.slice(1, nums.length)) + nums[0];
  }
  return nums[0];
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test));
console.log(sumTheSimpleWay(test));
