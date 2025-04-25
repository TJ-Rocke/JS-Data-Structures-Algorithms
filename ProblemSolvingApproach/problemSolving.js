/* Solve and Simplify

Solve the problem... if you cant... solve a simpler problem

Find the core difficulty in what you're trying to do (the thing that is tripping you up)
Temporarily ignore that difficulty
Write a simplified solution
Then incorporate that difficulty back in
*/

/* EXAMPLE
Write a function which takes in a string and returns counts of each character in the string
*/

/*
Should return object below
{
y : 1,
o : 1,
u : 2,
r : 2,
...
}
*/
// function charCount(str) {
//   // Step 1 Start where you know even if its static
//   // make object to return at the end
//   let result = {};
//   let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//   // loop over string, for each character
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     // if char is a number/letter AND is a key in object, add one to count
//     if (Number(char[i])) {
//       console.log("Is a number");
//     }
//     if (result[char] > 0) {
//       result[char]++;
//       // if the char is a letter/number AND not in object, add it to object and set value to 1
//     } else {
//       result[char] = 1;
//     }
//   }
//   console.log(result);
//   return result;
// }

// charCount("Hi there 1234");

/*
Refactoring Questions (to ask yourself)
Can you check the result?
Can you derive the result differently?
Can you understand it at a glance?
Can you use the result or method for some other problem?
Can you improve the performance of your solution?
Can you think of other ways to refactor?
How have other people solved this problem? (can ask to the interviewer)
*/
function charCount(str) {
  // Step 1 Start where you know even if its static
  // make object to return at the end
  let result = {};

  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if char is a number/letter AND is a key in object, add one to count
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
        // if the char is a letter/number AND not in object, add it to object and set value to 1
      } else {
        result[char] = 1;
      }
    }
  }
  console.log(result);
  return result;
}

// using For Of loop
function charCountr(str) {
  // Step 1 Start where you know even if its static
  // make object to return at the end
  let result = {};

  // loop over string, for each character
  for (let char of str) {
    char = char.toLowerCase();
    // if char is a number/letter AND is a key in object, add one to count
    if (/[a-z0-9]/.test(char)) {
      // if (result[char] > 0) {
      //   result[char]++;
      //   // if the char is a letter/number AND not in object, add it to object and set value to 1
      // } else {
      //   result[char] = 1;
      // }
      result[char] = ++result[char] || 1;
    }
  }
  console.log(result);
  return result;
}

charCountr("Hello hi!");
// charCount("Hi there 1234");
