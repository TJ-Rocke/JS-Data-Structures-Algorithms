# Analyzing Performance of Arrays and Objects

## Objectives

- Understand how Objects and Arrays work through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built-in js methods

## Big O of Objects

\*When ordering isn't needed, objects are an excellent choice, they are already unordered data structures\*

- Insertion/Add = O(1)
- Removal = O(1)
- Access/Retrieval/Updating = O(1)
- Searching = O(N) - searching is meant by checking to see if a piece of given info is in a value somewhere (seeing if a key has a particular value)

## Big O of Object Methods

- Object.keys - O(N)
- Object.values - O(N)
- Object.entries - O(N)
- hasOwnProperty - O(1) - pass in property and it returns a boolean
