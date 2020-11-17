# Big O Notation

Identifying the time complexity of a program or code helps in developing a better programs that can scale and run faster.

By analysing the code line by line we can determine the time complexity. placement of statements affects the time complexity. Suppose they are inside a loop or have function calls or even recursion. All these factors affects the runtime of your code. Let's see how to deal with these cases.

# Calculate Big O notation

The most common metric used to measure complexity of algorithm is using Big O.

## Key Highlights

- Big O = Big Order function. Drop constants and lower order terms. Eg. O(3 \* n^2 + 12n + 10) => O(n^2)
- Big O notation cares about worst-case scenario. Eg. sorting of elements in the array which are in reverse order

## Measures in Big O

- O(1) => Constant time
- O(log n) => Lograthmic
- O(n) => Linear Time
- O(n log n) => Lograthmic
- O(n^2) => Square
- O(n^3) => Cube
- O(2^n) => Exponential
- O(n!) => Factorial

Big O is measure in terms of no of input elements and operations performed.

# Sequential Statements

O(1) => comparisions, assignments, reading a variable

eg:

```javascript
function squareSum(a, b, c) {
  const sa = a * a;
  const sb = b * b;
  const sc = c * c;
  const sum = sa + sb + sc;
  return sum;
}
```

Each statement above takes constatnt O(1), if we add up the statements time it will be O(1).

# Conditional Statement

```javascript
if (isValid()) {
  // O(1)
  array.sort(); // O(n log n)
  return true; // O(1)
} else {
  return false; // O(1)
}
```

O(n log n + n) => Consider the higher order function => hence, O(n log n)

# Loop Statements

## Linear-Time Loops

```java
for (let i = 0; i < n; i++) {
    //statement1; O(n)
    //statement2; O(n)
}
```

Time Complexity => O(n)

## Constant-Time Loops

```javascript
for (let i = 0; i < 4; i++) {
  // statement1; O(4)
}
```

O(4) => O(1) => Runtime here is constant

## Logarithmic Time Loops

Consider the following code, where we divide an array in half on each iteration (binary search) on an input array already sorted.

```javascript
function fn(arr, target, low = 0, hight = array.length - 1) {
  let mid;
  while (low <= high) {
    mid = (low + high) / 2;
    if (target < array[mid]) high = mid - 1;
    else if (target > array[mid]) low = mid + 1;
    else break;
  }
  return mid;
}
```

This function divides the array by its middle point on each iteration. The while loop will execute the amount of times that we can divide array.length in half. We can calculate this using the log function. E.g. If the array's length is 8, then while loop will execute 3 times because log2(8) => 3.
=> O(log n)

## Nested loop statements

Sometimes you might need to visit all the elements on a 2D array (grid/table). For such cases, you might find yourself with two nested loops.

```javascript
for (let i = 0; i < n; i++) {
  // statement1;
  for (let j = 0; j < n; j++) {
    // statement2;
    // statement3;
  }
}
```

Assuming the statemwnts from 1 to 3 are O(1), we would have a runtime of O(n \* m). If instead of m, you had to iterate on n again, then it would be O(n^2).

# Function call statements

```javascript
for (let i = 0; i < n; i++) {
  fn1();
  for (let j = 0; j < n; j++) {
    fn2();
    for (let k = 0; k < n; k++) {
      fn3();
    }
  }
}
```
Depending on the runtime of fn1, fn2, and fn3, you would have different runtimes.

- If they all are constant O(1), then the final runtime would be O(n^3)
- However, if only fn1 and fn2 are constant and fn3 has a runtime of O(n^2), this program will have a runtime of O(n^5). Another way to look at it is, if fn3 has two nested and you replace the invocation with the actual implementation, you would have five nested loops.

## Recursive function statements

Analyzing the runtime of recursive functions might get a little tricky. There are different ways to do it. One intuitive way is to explore the recursion tree.

Let's say that we have the following program:

```javascript
function fn(n) {
    if (n < 0) return 0;
    if (n < 2) return n;

    return fn(n - 1) + fn(n - 2);
}
```
You can represent each function invocation as a bubble (or node).

Let's do some examples:
- When you n = 2, you have 3 function calls.