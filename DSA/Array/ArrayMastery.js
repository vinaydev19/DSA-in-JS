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
// console.log("Max and Min is: ", FindMaxAndMin(arr));

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
// console.log("Reversed Array is using temp arr: ", reverseArray(arr1));

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
// console.log("Reversed Array is using two pointer: ", reverseArray1(arr2));

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
// console.log("Array after left rotation by one: ", rotateArrayLeftByOne(arr3));

function rotateArrayRightByOne(arr) {
    let temp = arr[arr.length - 1]

    for (let i = arr.length - 2; i >= 0; i--) {
        arr[i + 1] = arr[i]
    }

    arr[0] = temp

    return arr
}

let arr4 = [1, 2, 3, 4, 5]
// console.log("Array after right rotation by one: ", rotateArrayRightByOne(arr4));


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
// console.log("Array after left rotation by k using loop k times: ", rotateArrayLeftByKLoopKTimes(arr5, k1));


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
// console.log("Array after right rotation by k using loop k times: ", rotateArrayRightByKLoopKTimes(arr6, k2));


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
// console.log("Array after left rotation by k using temp array: ", rotateArrayLeftByKUsingTempArray(arr7, k3));


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
// console.log("Array after right rotation by k using temp array: ", rotateArrayRightByKUsingTempArray(arr8, k4));


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
// console.log("Array after left rotation by k using reversal algorithm: ", rotateArrayLeftByKUsingReversalAlgorithm(arr9, k5));


function rotateArrayRightByKUsingReversalAlgorithm(arr, k) {
    k = k % arr.length

    reverse(arr, 0, arr.length - 1)
    reverse(arr, 0, k - 1)
    reverse(arr, k, arr.length - 1)

    return arr
}

let arr10 = [1, 2, 3, 4, 5]
let k6 = 2
// console.log("Array after right rotation by k using reversal algorithm: ", rotateArrayRightByKUsingReversalAlgorithm(arr10, k6));


/*
Day 2 – Two Pointers Basics
Learn the two pointer approach (start and end pointers).
Problems:
Check if array is a palindrome
Pair sum (Two Sum in sorted array)
Remove duplicates from sorted array
*/

// Problems of day 2

// Check if array is a palindrome
// brute force approach - way 1 (using extra space)
function isArrayPalindromeUsingExtraSpace(arr) {
    let temp = new Array(arr.length)

    for (let i = 0; i < arr.length; i++) {
        temp[i] = arr[arr.length - i - 1]
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== temp[i]) {
            return false
        }
    }

    return true
}

let arr11 = [1, 2, 3, 2, 1, 5]
// console.log("Is array palindrome using extra space: ", isArrayPalindromeUsingExtraSpace(arr11));

// optimal approach - way 2 (using two pointer)
function isArrayPalindromeUsingTwoPointer(arr) {
    let left = arr[0]
    let right = arr[arr.length - 1]

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false
        }
        left++
        right--
    }

    return true
}

let arr12 = [1, 2, 3, 2, 1, 5]
// console.log("Is array palindrome using two pointer: ", isArrayPalindromeUsingTwoPointer(arr12));


// Pair sum (Two Sum in sorted array) - way 1 (checking all pairs - brute force)
function pairSumBruteForce(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]  // return indices of the pair
            }
        }
    }
    return null
}

let arr13 = [1, 2, 3, 4, 5]
let target1 = 5
// console.log("Pair sum using brute force: ", pairSumBruteForce(arr13, target1));

// Pair sum (Two Sum in sorted array) - way 2 (using two pointer - optimal approach)
function pairSumTwoPointer(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]

        if (sum === target) {
            return [left, right]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
    return null
}

let arr14 = [2, 7, 11, 15]
let target2 = 9
// console.log("Pair sum using two pointer: ", pairSumTwoPointer(arr14, target2));


// Remove duplicates from sorted array - way 1 (using set - brute force)
function removeDuplicatesUsingSet(arr) {
    let set = new Set()

    for (let num of arr) {
        set.add(num)
    }

    for (let i = 0; i < set.length; i++) {
        arr[i] = set[i]
    }

    return set.size
}

let arr15 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// console.log("Remove duplicates using set: ", removeDuplicatesUsingSet(arr15));

// Remove duplicates from sorted array - way 2 (using two pointer - optimal approach)
function removeDuplicatesUsingTwoPointer(arr) {
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            arr[i + 1] = arr[j]
            i++
        }
    }
    return i + 1
}

let arr16 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// console.log("Remove duplicates using two pointer: ", removeDuplicatesUsingTwoPointer(arr16));


/*
Day 3 – Prefix Sum + Kadane’s
Learn prefix sum technique.
Learn Kadane’s algorithm (max subarray sum).
Problems:
    Prefix sum of array
    Range Sum Query - Immutable
    Find max subarray sum (Kadane’s)
    Subarray Sum Equals K
*/

// Problems of day 3

// Prefix sum of array - way 1 (using extra space - brute force)
function prefixSumUsingExtraSpace(arr) {
    let prefixSum = new Array(arr.length)
    prefixSum[0] = arr[0]

    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i]
    }

    return prefixSum
}
let arr17 = [1, 2, 3, 4, 5]
// console.log("Prefix sum using extra space: ", prefixSumUsingExtraSpace(arr17));

// prefix sum of array - way 2 (optimal approach - in-place)
function prefixSumInPlace(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i] + arr[i - 1]
    }
    return arr
}
let arr18 = [1, 2, 3, 4, 5]
// console.log("Prefix sum in-place: ", prefixSumInPlace(arr18));


// Range Sum Query - Immutable - way 1 (brute force - calculate sum for each query)
function rangeSumBruteForce(arr, queries) {
    let results = []

    for (let q of queries) {
        let left = q[0]
        let right = q[1]
        let sum = 0
        for (let i = left; i <= right; i++) {
            sum = sum + arr[i]
        }
        results.push(sum)
    }

    return results
}
let arr19 = [1, 2, 3, 4, 5]
let queries1 = [[0, 2], [1, 3], [0, 4]]
// console.log("Range sum using brute force: ", rangeSumBruteForce(arr19, queries1));


// Range Sum Query - Immutable - way 2 (optimal approach - using prefix sum)
function rangeSumUsingPrefixSum(arr, queries) {
    let prefixSum = new Array(arr.length)
    prefixSum[0] = arr[0]

    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i]
    }

    let results = []
    for (let q of queries) {
        let left = q[0]
        let right = q[1]
        if (left === 0) {
            results.push(prefixSum[right])
        } else {
            results.push(prefixSum[right] - prefixSum[left - 1])
        }
    }

    return results
}
let arr20 = [1, 2, 3, 4, 5]
let queries2 = [[0, 2], [1, 3], [2, 4]]
// console.log("Range sum using prefix sum: ", rangeSumUsingPrefixSum(arr20, queries2));


// Find max subarray sum (Kadane’s Algorithm) - way 1 (brute force - check all subarrays)
function maxSubarraySumBruteForce(arr) {
    let maxSum = -Infinity

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let currentSum = 0
            for (let k = i; k <= j; k++) {
                currentSum += arr[k]
            }
            maxSum = Math.max(maxSum, currentSum)
        }
    }

    return maxSum
}

let arr21 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// console.log("Max subarray sum using brute force: ", maxSubarraySumBruteForce(arr21)); // 6

// Find max subarray sum (Kadane’s Algorithm) - way 2 (optimal approach - Kadane's algorithm)
function maxSubarraySumKadane(arr) {
    let maxSum = -Infinity
    let currentSum = 0

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]
        maxSum = Math.max(maxSum, currentSum)
        if (currentSum < 0) {
            currentSum = 0
        }
    }
    return maxSum
}
let arr22 = [-2, -3, 4, -1, -2, 1, 5, -3]
// console.log("Max subarray sum using Kadane's algorithm: ", maxSubarraySumKadane(arr22)); // 6


// Subarray Sum Equals K - way 1 (brute force - check all subarrays)
function subarraySumEqualsKBruteForce(arr, k) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let currentSum = 0
            for (let l = i; l <= j; l++) {
                currentSum += arr[l]
            }

            if (currentSum === k) {
                count++
            }
        }
    }

    return count
}

let arr23 = [1, 1, 1]
let k7 = 2
// console.log("Subarray sum equals k using brute force: ", subarraySumEqualsKBruteForce(arr23, k7)); // 2

// Subarray Sum Equals K - way 2 (better approach - remove one l loop)
function subarraySumEqualsKBetter(arr, k) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j]

            if (currentSum === k) {
                count++
            }
        }
    }

    return count
}

let arr24 = [1, 1, 1]
let k8 = 2
// console.log("Subarray sum equals k using better approach: ", subarraySumEqualsKBetter(arr24, k8)); // 2

// Subarray Sum Equals K - way 3 (optimal approach - using prefix sum and hashmap)
function subarraySum(nums, k) {
    let count = 0;               // total number of subarrays
    let prefixSum = 0;           // running total of the array
    let map = new Map();         // store how many times a prefixSum has occurred
    map.set(0, 1);               // important: empty subarray sum = 0

    for (let num of nums) {
        prefixSum += num;        // update running total
        // check if there is a previous prefixSum that would make current subarray sum = k
        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }
        // update map with current prefixSum
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
}

let arr25 = [1, 1, 1]
let k9 = 2
// console.log("Subarray sum equals k using optimal approach: ", subarraySum(arr25, k9)); // 2
