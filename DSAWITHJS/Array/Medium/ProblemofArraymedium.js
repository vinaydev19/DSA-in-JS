// medium level problem of array in dsa with javascript


// 2Sum Problem - brute force approach
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (i == j) continue;
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
// Example usage:
let arr = [2, 7, 11, 15];
let target = 9;
console.log(twoSumBruteForce(arr, target)); // Output: [0, 1]


// 2Sum Problem - better approach using hash map
function twoSumBetterUsingHashMap(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let more = target - num;
        if (numMap.has(more)) {
            return [numMap.get(more), i];
        }
        numMap.set(num, i);
    }
}
// Example usage:
let arr2 = [3, 2, 4];
let target2 = 6;
console.log(twoSumBetterUsingHashMap(arr2, target2)); // Output: [1, 2]

// 2Sum Problem - optimal approach using two pointers
function twoSumOptimalUsingTwoPointers(nums, target) {
    let left = 0
    let right = nums.length - 1
    nums.sort((a, b) => a - b) // Ensure the array is sorted
    while (left < right) {
        let sum = nums[left] + nums[right]
        if (sum == target) {
            return [left, right]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
    return []
}
// Example usage:
let arr3 = [3, 2, 4];
let target3 = 6;
console.log(twoSumOptimalUsingTwoPointers(arr3, target3)); // Output: [1, 3]


// Sort an array of 0's 1's and 2's