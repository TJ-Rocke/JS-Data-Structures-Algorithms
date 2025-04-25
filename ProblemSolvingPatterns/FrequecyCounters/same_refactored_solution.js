/*
EXAMPLE
Write a function called 'same', which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of the values must be the same.

End result should be:
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be the same frequency/ occur the same amount as the input)
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // start comment section
  // 2 separate loops are far better than 2 nested loops, separate loops are O(n)
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // end comment section
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  // check to see if corresponding values are in each object
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      console.log(false);
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);
