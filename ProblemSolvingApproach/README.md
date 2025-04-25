# Problem Solving Approach

## Contents

### ----------------------

1. Understand the Problem
2. Explore Concrete examples
3. Break it down
4. Solve/Simplify
5. Look Back and Refactor

## Understand the Problem

Thoroughly ask about the task ahead
For interviews, it is okay to be vocal and ask these questions

1. Can you restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution
4. Can the outputs be determined from the inputs?
5. Do you have enough information to solve the problem?
6. How should I label the important pieces of data that are a part og the problem?

Example
Write a function which takes two numbers and returns their sum

1. Can you restate the problem in my own words?
   Write a function to add 2 numbers and returns the sum
2. What are the inputs that go into the problem?

- ints?
- floats?
- what about string for large numbers?

3. What are the outputs that should come from the solution
   -int? float? string?
4. Can the outputs be determined from the inputs?
5. Do you have enough information to solve the problem?
6. How should I label the important pieces of data that are a part og the problem?

## Explore Concrete Examples

Start with writing down 2 simple examples
Progress to more complex examples
Explore examples with empty inputs
Explore examples with invalid inputs

EXAMPLE
Write a function which takes in a string and returns counts of each character in the string

Understand the problem
Start with simple examples
Progress to more complex examples
explore examples with empty inputs
explore examples with invalid inputs

EXAMPLE
charCount("aaaa"); // gathered that it needs to be returned in an object {a:4}
charCount("hello"); // gathered that it needs to be returned in an object {h:1, e:1, l: 2, o:1}

Ask all the questions related to the above, really deep dive

## Break it Down

Explicitly write out the steps you need to take (this forces you to think about the code you'll write before you write it)

EXAMPLE
Write a function which takes in a string and returns counts of each character in the string

function charCount(""Your PIN number is 1234)
{
// do something
}

## Solve and Simplify

## Solve the problem... if you cant... solve a simpler problem

Find the core difficulty in what you're trying to do (the thing that is tripping you up)
Temporarily ignore that difficulty
Write a simplified solution
Then incorporate that difficulty back in

EXAMPLE
Write a function which takes in a string and returns counts of each character in the string

/_
Should return object below
{
y : 1,
o : 1,
u : 2,
r : 2,
...
}
_/

```
function charCount(str) {
// Step 1 Start where you know even if its static
// make object to return at the end
let result = {};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// loop over string, for each character
for (let i = 0; i < str.length; i++) {
let char = str[i].toLowerCase();
// if char is a number/letter AND is a key in object, add one to count
if (Number(char[i])) {
console.log("Is a number");
}
if (result[char] > 0) {
result[char]++;
// if the char is a letter/number AND not in object, add it to object and set value to 1
} else {
result[char] = 1;
}
}
console.log(result);
return result;
}

charCount("Hi there 1234");
```

## Look back and Refactor

Refactoring Questions (to ask yourself)
Can you check the result?
Can you derive the result differently?
Can you understand it at a glance?
Can you use the result or method for some other problem?
Can you improve the performance of your solution?
Can you think of other ways to refactor?
How have other people solved this problem? (can ask to the interviewer)
