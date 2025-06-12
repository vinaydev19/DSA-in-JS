// 🗓️ Day 1 – Array Basics + Traversals + Maximum/Minimum
// 🎯 Goals: Understand how arrays work, indexing, traversal, input/output

// Traversing arrays
/*
let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
*/


// Array Reverse
// 1st way: using tamporary array
/*
let arr = [1, 2, 3, 4, 5]
let temp = new Array(arr.length)
for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[arr.length - i - 1]
}
for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i]
}

console.log(arr);
*/


// 2st way: Using Two Pointers
/*
let arr = [1, 2, 3, 4, 5]
let left = 0;
let right = arr.length - 1
while (left < right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
}
console.log(arr);
*/

// 3th way: By Swapping Elements
/*
let arr = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i]
    arr[i] = arr[arr.length - i - 1]
    arr[arr.length - i - 1] = temp
}
console.log(arr);
*/



// Maximum and minimum of an array
// basic
/*
let arr = [3, 5, 4, 1, 9]
console.log("min", findMin(arr));
console.log("max", findMax(arr));
function findMin(arr) {
    let setMin = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < setMin) {
            setMin = arr[i]
        }
    }
    return setMin
}
function findMax(arr) {
    let setMax = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > setMax) {
            setMax = arr[i]
        }
    }
    return setMax
}
*/

// Rotate Array by one element on left and rigth side
/*
// left
let arr = [1, 2, 3, 4, 5, 6]
let temp = arr[0]
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
}
arr[arr.length - 1] = temp
console.log(arr);

// right
let arr = [1, 2, 3, 4, 5, 6]
let temp = arr[arr.length - 1]
for (let i = arr.length - 1; i > 0; i--){
    arr[i] = arr[i - 1]
}
arr[0] = temp
console.log(arr);

*/



// rotate an arrays by k or d element
// k or d mean how many time rotate a array, let's k is 2 rotate a array by two elements
// ex: [1, 2, 3, 4, 5, 6] after rotate [3, 4, 5, 6, 1, 2]

// brute force Approach
/*
// left
let arr = [1, 2, 3, 4, 5, 6]
let k = 3
k = k % arr.length
for (let i = 0; i < k; i++) {
    let temp = arr[0]
    for (let j = 0; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1]
    }
    arr[arr.length - 1] = temp
}
console.log(arr);

// right
let arr = [1, 2, 3, 4, 5, 6]
let k = 2
k = k % arr.length
for (let i = 0; i < k; i++) {
    let temp = arr[arr.length - 1]
    for (let j = arr.length - 1; j > 0; j--) {
        arr[j] = arr[j - 1]
    }
    arr[0] = temp
}
console.log(arr);
*/


// better Approach: using Temporary Array
// left
// 1 way
/*
let arr = [1, 2, 3, 4, 5, 6]
let k = 2
k = k % arr.length
let temp = new Array(arr.length)
for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length]
}
console.log(temp);
*/


// 2 way
/*
let arr = [1, 2, 3, 4, 5, 6]
let k = 2
k = k % arr.length
let temp = new Array(arr.length)
for (let i = 0; i < arr.length - k; i++) {
    temp[i] = arr[k + i]
    
}
for (let i = 0; i < k; i++) {
    temp[arr.length - k + i] = arr[i]
}
console.log(temp);
*/


// right
// 1 Way
/*
let arr = [1, 2, 3, 4, 5, 6]
let k = 2
k = k % arr.length
let temp = new Array(arr.length)
for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[((arr.length - k) + i) % arr.length]
}
console.log(temp);
*/



// 2 way
/*
let arr = [1, 2, 3, 4, 5, 6]
let k = 2
k = k % arr.length
let temp = new Array(arr.length)
for (let i = 0; i < arr.length - k; i++) {
    temp[k + i] = arr[i]
}
for (let i = 0; i < k; i++) {
    temp[i] = arr[arr.length - k + i]
}
console.log(temp);
*/



// optimal approach:  Using Reversal Algorithm
// right
/*
let arr = [1, 2, 3, 4, 5, 6]
let k = 3
k = k % arr.length
reverse(0, k - 1)
reverse(k, arr.length - 1)
reverse(0, arr.length - 1)
console.log(arr);
function reverse(start, end) {
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}
*/

// right
/*
let arr = [1, 2, 3, 4, 5, 6]
let k = 2
k = k % arr.length
reverse(0, arr.length - 1)
reverse(0, k - 1)
reverse(k, arr.length - 1)
console.log(arr);
function reverse(start, end) {
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}
*/

// merge sorted array
let arr1 = [1, 3, 5, 7]
let arr2 = [2, 4, 6, 8]
let mergedArray = new Array(arr1.length + arr2.length)
let i = 0, j = 0, k = 0;
while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        mergedArray[k] = arr1[i]
        i++
        k++
    } else {
        mergedArray[k] = arr2[j]
        j++
        k++
    }
}
while (j < arr2.length) {
    mergedArray[k] = arr2[j]
    j++
    k++
}
while (i < arr1.length) {
    mergedArray[k] = arr1[i]
    i++
    k++
}

console.log(mergedArray);
