// remove duplicates from sorted array
function removeDuplicates(arr) {
    let j = 1;
    for(let i = 0; i < nums.length -1 ; i++){
        if(nums[i] != nums[i+1]){
            nums[j] = nums[i+1]
            j++
        }
    }
    return j
}

// Example usage:
let nums = [1, 1, 2, 2, 3, 4];
let result = removeDuplicates(nums);
console.log(result); // Output: 4 (the length of the array after removing duplicates)
// Output: [1, 2, 3, 4]



// 2. Two Sum
/*
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
let target = 9;
let result = twoSum(arr, target);
console.log(result);


// 2. Two Sum with two pointers
function twoSumTwoPointers(arr, target) {
    arr.sort((a, b) => a - b);
   
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++
        } else {
            right--;
        }
    }
}


// Example usage:
let arrTwo = [1, 2, 3, 4, 5];
let targetTwo = 9;
let resultTwo = twoSumTwoPointers([3,2,4], targetTwo);
console.log(resultTwo);
*/

// 2. two sum with hashmap

function twoSumHashMap(arr, target) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }

    return null;
}

// Example usage:
let arrThree = [1, 2, 3, 4, 5];
let targetThree = 9;
let resultThree = twoSumHashMap(arrThree, targetThree);
console.log(resultThree);