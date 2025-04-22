# Big O Notation

## a way to formalize fuzzy counting, talk formally about how the runtime of an algorithm grows as inputs grow, and how to see trends

---

## Definition - an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant multipied by f(n), as 'n' increases

### linear - as f(n) aka 'n' grows = runtime also grows aka --> f(n) = n

### quadratic - as n grows = the runtime squares --> f(n) = n^2

### constant = as n grows = runtime remains constant --> f(n) = 1

### or f(n) could be something entirely different

Basically when n (input) grows, does the time grow?

Look at the big picture of what the time / potential time trend will/might look like

## Space complexity deals with the amount of space required by the algorithm only

as 'n' grows, does the required space increase ( ex. as input increases does the size of an array increase (.push or .shift for example))

## Logarithm of x number roughly measures the number of times you can divide x number by 2 \*before you get a value that's less than or equal to 1.

O(log n) is time complexity is great! (just above of O(1))
O(nlog n) is not that great (just below O(n^2))
