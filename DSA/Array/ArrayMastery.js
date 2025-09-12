// Day 1 – Fundamentals

/*
Learn what an array is in memory (contiguous, index-based).
Operations: access, insert, delete, traverse.
JS methods: push, pop, shift, unshift, slice, splice.

Practice problems:
        Find max/min in array
        Reverse array in-place
        Rotate array (left/right by k)
*/

// Problems of day 1

// Find Maximum and Minimum in Array - way 1
function FindMaxAndMin(arr) {
    let max = -Infinity
    let min = Infinity

    if (arr.length < 2) {
        return null
    }

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }

        if (min > arr[i]) {
            min = arr[i]
        }
    }

    return [max, min]
}

let arr = [6, 5, 10, 12, 1]
console.log(FindMaxAndMin(arr));



// Reverse an Array (in-place) - way use temp array
function reverseArray(arr) {
    let temp = new Array(arr.length)

    for (let i = 0; i < arr.length; i++) {
        temp[i] = arr[arr.length - i - 1]
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i]
    }

    return arr
}
let arr1 = [1, 2, 3, 4, 6]
console.log(reverseArray(arr1));


// Reverse an Array (in-place) - way use two pointer
function reverseArray1(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
    return arr
}
let arr2 = [1, 2, 3, 4, 6]
console.log(reverseArray1(arr2));


// Rotate Array by K steps (left & right)

/*
// this left rotation
let k = Number(prompt("enter a k number"))
let arr = [1, 2, 3, 4, 5]
k = k % arr.length
for (let i = 0; i < k; i++) {
    temp = arr[0]
    for (let j = 0; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1]
    }
    arr[arr.length - 1] = temp
}
console.log(arr);
*/


/*
// this right rotation
let k = Number(prompt("enter a k number"))
let arr = [1, 2, 3, 4, 5]
k = k % arr.length
for (let i = 0; i < k; i++) {
    temp = arr[arr.length - 1]
    for (let j = arr.length - 1; j > 0; j--) {
        arr[j] = arr[j - 1]
    }
    arr[0] = temp
}
console.log(arr);
*/


// Q:- Left Rotation of an Array using Temporary Array
/*
let arr = [1, 2, 3, 4, 5]
let temp = new Array(arr.length)
let k = Number(prompt("enter a k number"))
k = k % arr.length
for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length]
}
console.log(temp);
*/



// right
/*
let arr = [1, 2, 3, 4, 5]
let temp = new Array(arr.length)
let k = 2
k = k % arr.length
for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[((arr.length - k) + i) % arr.length]
}
console.log(temp);
*/



//Q:- Reversal Algorithm for Array left Rotation
/*
let arr = [1, 2, 3, 4, 5]
let k = 2
k = k % arr.length
reverse(0, k - 1)
reverse(k, arr.length - 1)
reverse(0, arr.length - 1)
console.log(arr);
function reverse(i, j) {
    while (i < j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}
*/

// right Rotation
/*
let arr = [1, 2, 3, 4, 5]
let k = 3
k = k % arr.length

reverse(0, arr.length - 1)
reverse(0, k - 1)
reverse(k, arr.length - 1)
console.log(arr);
function reverse(i, j) {
    while (i < j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}
*/
