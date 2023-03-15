// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const median = (arr) => {
  arr = [23, 25];
  const middle_index = Math.floor(arr.length / 2);
  if (arr.length % 2) {
    return arr[middle_index];
  } else {
    return (arr[middle_index] + arr[middle_index - 1]) / 2;
  }
};

const average = (arr) => {
  let sum = arr.reduce((sum, current) => sum + current, 0);
  return sum / arr.length;
};

const range = (arr) => {
  return Math.max(...arr) - Math.min(...arr);
};

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
console.log("Median is " + median(ages));
console.log("Average is " + average(ages));
console.log("Range is " + range(ages));
console.log("min - average " + Math.abs(Math.min(...ages) - average(ages)));
console.log("max - average " + Math.abs(Math.max(...ages) - average(ages)));
