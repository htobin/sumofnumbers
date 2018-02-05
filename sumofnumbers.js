const testNums = [1, 2, 3, 4];
function sumfor(numbers) {
  let sumofnums = 0;
  for (const nums of numbers) { sumofnums += nums; }
  return sumofnums;
}
console.log(sumfor(testNums));

function sumwhile(numbers) {
  let sumofnums = 0;
  let i = 0;
  while (i < numbers.length) {
    sumofnums += numbers[i];
    i++;
  }
  return sumofnums;
}
console.log(`for loop ${sumwhile(testNums)}`);

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}
console.log(`recursion ${sumRecursion(testNums)}`);

function simpleSum(numbers) {
  const reduce = _.reduce(numbers, function (memo, num) { return memo + num; }, 0);
  return reduce;
}
console.log(`simple ${simpleSum(testNums)}`);

