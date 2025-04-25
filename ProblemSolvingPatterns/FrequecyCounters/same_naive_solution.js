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
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // using indexOf, is creating a loop over an array which means its a nested loop (O(n^2))
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
