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
console.log("Max and Min is: ", FindMaxAndMin(arr));



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
console.log("Reversed Array is using temp arr: ", reverseArray(arr1));


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
console.log("Reversed Array is using two pointer: ", reverseArray1(arr2));


// Rotate Array (left/right by 1)

function rotateArrayLeftByOne(arr) {
    let temp = arr[0]

    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }

    arr[arr.length - 1] = temp

    return arr
}

let arr3 = [1, 2, 3, 4, 5]
console.log("Array after left rotation by one: ", rotateArrayLeftByOne(arr3));

function rotateArrayRightByOne(arr) {
    let temp = arr[arr.length - 1]

    for (let i = arr.length - 2; i >= 0; i--) {
        arr[i + 1] = arr[i]
    }

    arr[0] = temp

    return arr
}

let arr4 = [1, 2, 3, 4, 5]
console.log("Array after right rotation by one: ", rotateArrayRightByOne(arr4));


// Rotate Array (left/right by k) - way 1 (using loop k times)

function rotateArrayLeftByKLoopKTimes(arr, k) {
    k = k % arr.length
    for (let i = 0; i < k; i++) {
        let temp = arr[0]

        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1]
        }

        arr[arr.length - 1] = temp
    }

    return arr
}

let arr5 = [1, 2, 3, 4, 5]
let k1 = 2
console.log("Array after left rotation by k using loop k times: ", rotateArrayLeftByKLoopKTimes(arr5, k1));


function rotateArrayRightByKLoopKTimes(arr, k) {
    k = k % arr.length
    for (let i = 0; i < k; i++) {
        let temp = arr[arr.length - 1]

        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1]
        }

        arr[0] = temp
    }

    return arr
}

let arr6 = [1, 2, 3, 4, 5]
let k2 = 2
console.log("Array after right rotation by k using loop k times: ", rotateArrayRightByKLoopKTimes(arr6, k2));


// Rotate Array (left/right by k) - way 2 (using temp array)

function rotateArrayLeftByKUsingTempArray(arr, k) {
    k = k % arr.length
    let temp = new Array(arr.length)

    for (let i = 0; i < arr.length; i++) {
        temp[i] = arr[(i + k) % arr.length]
    }

    // this options if don't want to return new array and want to modify original array
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = temp[i]
    // }

    return temp
}

let arr7 = [1, 2, 3, 4, 5]
let k3 = 2
console.log("Array after left rotation by k using temp array: ", rotateArrayLeftByKUsingTempArray(arr7, k3));


function rotateArrayRightByKUsingTempArray(arr, k) {
    k = k % arr.length
    let temp = new Array(arr.length)

    for (let i = 0; i < arr.length; i++) {
        temp[i] = arr[((arr.length - k) + i) % arr.length]
    }

    // this options if don't want to return new array and want to modify original array
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = temp[i]
    // }

    return temp
}

let arr8 = [1, 2, 3, 4, 5]
let k4 = 2
console.log("Array after right rotation by k using temp array: ", rotateArrayRightByKUsingTempArray(arr8, k4));


// Rotate Array (left/right by k) - way 3 (using reversal algorithm)

function reverse(arr, i, j) {
    while (i < j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}

function rotateArrayLeftByKUsingReversalAlgorithm(arr, k) {
    k = k % arr.length

    reverse(arr, 0, k - 1)
    reverse(arr, k, arr.length - 1)
    reverse(arr, 0, arr.length - 1)

    return arr
}

let arr9 = [1, 2, 3, 4, 5]
let k5 = 2
console.log("Array after left rotation by k using reversal algorithm: ", rotateArrayLeftByKUsingReversalAlgorithm(arr9, k5));


function rotateArrayRightByKUsingReversalAlgorithm(arr, k) {
    k = k % arr.length

    reverse(arr, 0, arr.length - 1)
    reverse(arr, 0, k - 1)
    reverse(arr, k, arr.length - 1)

    return arr
}

let arr10 = [1, 2, 3, 4, 5]
let k6 = 2
console.log("Array after right rotation by k using reversal algorithm: ", rotateArrayRightByKUsingReversalAlgorithm(arr10, k6));