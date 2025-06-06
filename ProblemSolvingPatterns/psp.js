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

// 2 separate loops are far better than 2 nested loops which is O(n)

function same(ar1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
}
