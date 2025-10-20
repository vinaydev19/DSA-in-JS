/*
Day 1: Fundamentals & Exercises
Topics to revise:
    Basics of Array
        Static vs dynamic, indexing, memory allocation
    Insertion & Deletion
        At beginning, middle, end
    Traversal & Searching
        Forward/backward traversal
        Linear search & Binary search
    Manipulation & Reverse
        Reverse array, rotate, shuffle
*/

// what is an Array?
// An array is a data structure that can hold a fixed number of values of a single type.
// in JavaScript, arrays are dynamic and can hold values of different types.
// Arrays are zero-indexed, meaning the first element is at index 0.
// Arrays are stored in contiguous memory locations.
// Arrays can be created using array literals or the Array constructor.
// Example of creating an array
let array = [1, 2, 3, 4, 5];
console.log("Initial Array:", array);

// array literals vs Array constructor
let arrLiteral = [10, 20, 30];
let arrConstructor = new Array(10, 20, 30);
console.log("Array Literal:", arrLiteral);
console.log("Array Constructor:", arrConstructor);


// ==========================
// 🧩 1. Array Creation
// ==========================

const arr1 = Array.of(1, 2, 3);
console.log("Array.of:", arr1); // [1,2,3]

const arr2 = Array.from("abc");
console.log("Array.from:", arr2); // ['a','b','c']

console.log("Array.isArray:", Array.isArray([1, 2, 3])); // true
console.log("Array.isArray (false):", Array.isArray("abc")); // false

// ==========================
// 🟩 2. Adding / Removing Elements
// ==========================

let arr = [1, 2];
arr.push(3);
console.log("push:", arr); // [1,2,3]

arr.pop();
console.log("pop:", arr); // [1,2]

arr.unshift(0);
console.log("unshift:", arr); // [0,1,2]

arr.shift();
console.log("shift:", arr); // [1,2]

arr = [1, 2, 3, 4];
arr.splice(1, 2, "a", "b");
console.log("splice:", arr); // [1,'a','b',4]

arr = [1, 2, 3, 4];
console.log("slice:", arr.slice(1, 3)); // [2,3]

const merged = [1, 2].concat([3, 4]);
console.log("concat:", merged); // [1,2,3,4]

// ==========================
// 🟨 3. Searching / Finding
// ==========================

arr = [10, 20, 30, 10];
console.log("indexOf:", arr.indexOf(20)); // 1
console.log("lastIndexOf:", arr.lastIndexOf(10)); // 3
console.log("includes:", arr.includes(30)); // true

console.log("find:", arr.find(x => x > 15)); // 20
console.log("findIndex:", arr.findIndex(x => x > 15)); // 1
console.log("findLast:", arr.findLast(x => x > 15)); // 30
console.log("findLastIndex:", arr.findLastIndex(x => x > 15)); // 2

// ==========================
// 🟧 4. Iteration Methods
// ==========================

arr = [1, 2, 3];

// forEach: loops through items
// To loop through each element in an array and execute a function (side effects like printing or updating variables).
/*
How it works:
    Goes through every element in order.
    Runs the provided function once for each element.
    Does not return anything (returns undefined).
*/
arr.forEach(x => console.log("forEach:", x * 2));

// map: creates new array
// To transform each element and create a new array from the results.
/*
How it works:
    Calls a function for each element.
    The function’s return value becomes the new element.
    Returns a new array with transformed values.
*/
let doubled = arr.map(x => x * 2);
console.log("map:", doubled); // [2,4,6]

// filter: returns array that matches condition
// To keep only the elements that match a condition and remove the rest.
/*
How it works:
    Runs the function for every element.
    If the function returns true, the element stays.
    Returns a new array with only the matching elements.
*/
let filtered = [10, 20, 30, 40].filter(x => x > 20);
console.log("filter:", filtered); // [30,40]

// reduce: accumulates values
// To take all array values and combine them into one result.
/*
How it works:
    Takes a function with accumulator and current value.
    Starts with an initial value (e.g., 0).
    Returns a single combined result (sum, average, object, etc.).
 */
let sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log("reduce (sum):", sum); // 10

// every: checks all elements
// Check if all elements satisfy a condition.
/*
How it works:
    Runs a test for each element.
    Stops early if one test fails.
    Returns true or false.
*/
console.log("every:", [2, 4, 6].every(x => x % 2 === 0)); // true

// some: checks if at least one passes
// Check if at least one element matches a condition.
/*
How it works:
    Runs a test for each element.
    Stops as soon as one returns true.
    Returns true or false.
*/
console.log("some:", [1, 3, 4].some(x => x % 2 === 0)); // true

// ==========================
// 🟪 5. Sorting / Reversing
// ==========================

arr = [4, 2, 10, 1];
arr.sort((a, b) => a - b);
console.log("sort:", arr); // [1,2,4,10]

arr.reverse();
console.log("reverse:", arr); // [10,4,2,1]

// Non-mutating versions
arr = [3, 1, 2];
console.log("toSorted:", arr.toSorted()); // [1,2,3]
console.log("toReversed:", arr.toReversed()); // [2,1,3]

// ==========================
// 🟥 6. Copying & Filling
// ==========================

arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log("copyWithin:", arr); // [4,5,3,4,5]

arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log("fill:", arr); // [1,0,0,4]

// ==========================
// ⚫ 7. Iterators
// ==========================

arr = ["a", "b", "c"];
console.log("keys:", [...arr.keys()]); // [0,1,2]
console.log("values:", [...arr.values()]); // ['a','b','c']
console.log("entries:", [...arr.entries()]); // [[0,'a'],[1,'b'],[2,'c']]

// ==========================
// ⚪ 8. Flattening
// ==========================

arr = [1, [2, [3]]];
console.log("flat:", arr.flat(2)); // [1,2,3]

arr = [1, 2, 3];
console.log("flatMap:", arr.flatMap(x => [x, x * 2]));
// [1,2,2,4,3,6]

// ==========================
// 🟫 9. New ES2023–ES2025 Methods
// ==========================

arr = [10, 20, 30];
console.log("at (-1):", arr.at(-1)); // 30

arr = [1, 2, 3];
console.log("with:", arr.with(1, 99)); // [1,99,3]

arr = [1, 2, 3];
console.log("toSpliced:", arr.toSpliced(1, 1, 9)); // [1,9,3]

const items = [
    { type: "fruit", name: "apple" },
    { type: "veg", name: "carrot" },
    { type: "fruit", name: "banana" }
];

console.log("group:", items.group(item => item.type));
// { fruit: [...], veg: [...] }

// ==========================
// ⚙️ Bonus: Spread & Destructuring
// ==========================

arr = [1, 2, 3];
const copy = [...arr];
console.log("spread copy:", copy);

const [a, b, c] = arr;
console.log("destructuring:", a, b, c); // 1 2 3

const mergedArr = [...arr, 4, 5];
console.log("merged with spread:", mergedArr);
