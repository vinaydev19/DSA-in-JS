// 📅 Day 1: Array Basics + Implementation

/*
🎯 Goal:
Understand arrays: indexing, looping, insertion, deletion
Practice basic operations manually
📘 Learn:
What is an array?
Indexing, Traversal, Push, Pop, Shift, Unshift
Time complexities: O(1), O(n)
*/

/*
// indexing
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // 1
console.log(arr[2]); // 3
console.log(arr[arr.length - 1]); // 5

// looping
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// insertion at the end
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// insertion at the beginning
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5, 6]

// deletion from the end
arr.pop();
console.log(arr); // [0, 1, 2, 3, 4, 5]

// deletion from the beginning
arr.shift();
console.log(arr); // [1, 2, 3, 4, 5]
*/

// Problems 


// 🔗 Reverse an Array
// let arr = [1, 2, 3, 4, 5];

// 1. using temp array
/*
let temp = new Array(arr.length)
for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[arr.length - 1 - i]
}
for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i]
}
console.log(arr);
*/


// 2. without using temp or two pointer
/*
let left = 0
let right = arr.length - 1
while (left < right){
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
}
console.log("two prointer arr", arr);
*/

// 🔗 Max/Min in Array
let arr = [2, 2, 10, 3, 4, 5, 1];
let max = -Infinity
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(max);

let min = Infinity
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
}
console.log(min);

function FindSecondLargest(arr) {
    if (arr.length < 2) {
        return null
    }
    let firstLargest = -Infinity
    let secondLargest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
console.log(FindSecondLargest([10, 20, 20]));
