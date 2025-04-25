/*
Anagrams
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
Given 2 strings, write a function to determine if the second string is an anagram of the first. 
*/
// Understand the problem - see if two strings contain the same characters
// concrete examples?
/* break it down:
a function
function takes 2 string params
check to see if the strings are of the same length
check to see if they contain the exact same letters
check to see if they contain the exact same number of letters
return true if all conditions are met
*/
// simpler problem?
// refactoring?

function anagram(str1, str2) {
  // labels
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // check if strings are same length
  if (str1.length !== str2.length) {
    return false;
  }

  // loop through each string and store the chars in respective objects
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  // check to see if each object contains the same number of letters
  /**
   * Break it down
   * see if counter1 keys and values match counter2 key and value
   * for every key in counter 1, does it match the same key and value in counter2
   */
  for (let key in frequencyCounter1) {
    if (!key in frequencyCounter2) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(anagram("", ""));
console.log(anagram("aaz", "zza"));
console.log(anagram("anagram", "nagaram"));
console.log(anagram("rat", "car"));
console.log(anagram("awesome", "awesom"));
console.log(anagram("qwerty", "qeywrt"));
console.log(anagram("texttwisttime", "timetwisttext"));
