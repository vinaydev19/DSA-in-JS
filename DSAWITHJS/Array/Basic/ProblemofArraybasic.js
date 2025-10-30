// let start do arrays basic question

// Largest Element in an Array 
// way 1 to solve this problem

function findTheLargestElementInArrayWayOne(arr) {
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr[arr.length - 1]
}

let arr = [13, 46, 24, 52, 20, 9];
console.log("way 1:", findTheLargestElementInArrayWayOne(arr));


// way 2 to solve this problem
function findTheLargestElementInArrayWayTwo(arr) {
    let largest = arr[0] // or -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }

    return (largest)
}
let arr1 = [13, 46, 24, 52, 20, 9];
console.log("way 2:", findTheLargestElementInArrayWayTwo(arr1));


// Find Second Second Largest Element in an array

function findTheSecondLargestElementInArrayOptimal(arr) {
    let largest = -Infinity
    let sLargest = -Infinity

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > largest) {
            sLargest = largest
            largest = arr[i]
        } else if (arr[i] < largest && arr[i] > sLargest) [
            sLargest = arr[i]
        ]
    }

    return sLargest
}

let arr2 = [13, 46, 24, 52, 20, 9];
console.log(findTheSecondLargestElementInArrayOptimal(arr2));

// Check if the array is sorted
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1])
            return false;
    }

    return true;
}

const arr3 = [1, 2, 3, 4, 5];

console.log(isSorted(arr3) ? "True" : "False");


// Remove duplicates from Sorted array - brute force
function removeDupliSortedArrayBrute(arr) {
    let unique = new Set()
    let index = 0
    for (const arrnum of arr) {
        if (!unique.has(arrnum)) {
            unique.add(arrnum)
            arr[index] = arrnum
            index++
        }
    }
    return index
}

let arr4 = [1, 1, 2, 2, 2, 3, 3]
console.log(removeDupliSortedArrayBrute(arr4));


// Remove duplicates from Sorted array - two Pointer 
function removeDupliSortedArrayTwoPointer(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            nums[i + 1] = nums[j];
            i++
        }
    }
    return i + 1
}

let arr5 = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4]
console.log(removeDupliSortedArrayTwoPointer(arr5));




// Left Rotate an array by one place
function rotateArrayLeftByOne(arr) {
    let temp = arr[0]

    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }

    arr[arr.length - 1] = temp

    return arr
}

let arr6 = [1, 2, 3, 4, 5]
console.log("Left Rotate an array by one place");
console.log(rotateArrayLeftByOne(arr6));


// Left rotate an array by D/K places - brute force Approach - using two loops
function rotateArrayRightByDLoopKTimes(arr, k) {
    k = k % arr.length

    for (let i = 0; i < k; i++) {
        let temp = arr[0]

        for (let i = 1; i < arr.length; i++) {
            arr[i - 1] = arr[i]
        }

        arr[arr.length - 1] = temp
    }
    return arr
}
let arr7 = [1, 2, 3, 4, 5]
let k = 2
console.log("Left rotate an array by D/K places - brute force Approach - using two loops");
console.log(rotateArrayLeftByDUsingTempArray(arr7, k));


// Left rotate an array by D/K places - better Approach - using temp array
function rotateArrayLeftByDUsingTempArray(arr, k) {
    k = k % arr.length
    let temp = new Array(arr.length)

    for (let i = 0; i < arr.length; i++) {
        temp[i] = arr[(i + k) % arr.length]
    }

    // this options if don't want to return new array and want to modify original array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i]
    }

    return arr
}

let arr8 = [1, 2, 3, 4, 5]
let k1 = 3
console.log("Left rotate an array by D/K places - better Approach - using temp array");
console.log(rotateArrayLeftByDUsingTempArray(arr8, k1));


// Left rotate an array by D/K places - better Approach - using reversal algorithm
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
let k3 = 2
console.log("Left rotate an array by D/K places - better Approach - using reversal algorithm");
console.log(rotateArrayLeftByKUsingReversalAlgorithm(arr9, k3));


// right Rotate an array by one place
function rotateArrayRightByOne(arr) {
    let temp = arr[arr.length - 1]

    for (let i = arr.length - 2; i >= 0; i--) {
        arr[i + 1] = arr[i]
    }

    arr[0] = temp

    return arr
}

let arr10 = [1, 2, 3, 4, 5]
// console.log(rotateArrayRightByOne(arr10));