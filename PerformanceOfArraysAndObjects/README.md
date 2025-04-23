# Analyzing Performance of Arrays and Objects

## Objectives

- Understand how Objects and Arrays work through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built-in js methods

## Big O of Objects

### When to use Objects

- When you don't need order
- When you need fast access / insertion and removal
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

## Big O of Arrays

- Insertion - Depends on where we're inserting - pushing to the end of an array is O(1), pushing to the beginning means re-indexing every single element O(N)
- Removal - same as insertion ^
- Searching - O(N)
- Access - O(1) - no matter the size JS will jump straight to the requested index

### When to use Arrays

- When you need order
- When you need fast access / insertion and removal (sort of...)

### Big O of Array Methods

- push - O(1)
- pop - O(1)
  shift - O(N)
  unshift - O(N)
  concat - O(N)
  slice - O(N)
  splice - O(N)
  sort - O(N \* log N)
  forEach/map/filter/reduce/etc. - O(N)

  Avoid adding and removing from the beginning in Arrays
