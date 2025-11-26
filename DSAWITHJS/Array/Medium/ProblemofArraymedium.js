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
console.log("two sum brute force:", twoSumBruteForce(arr, target)); // Output: [0, 1]


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
console.log("two sum better using hash map:", twoSumBetterUsingHashMap(arr2, target2)); // Output: [1, 2]

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
console.log("two sum optimal using two pointers:", twoSumOptimalUsingTwoPointers(arr3, target3)); // Output: [1, 2]

// Sort an array of 0's 1's and 2's - brute force approach - merge sort
function sortColorsBruteForce(nums) {
    function merge(arr, low, mid, high) {
        const temp = []
        let left = low;
        let right = mid + 1;

        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left++])
            } else {
                temp.push(arr[right++])
            }
        }

        while (left <= mid) {
            temp.push(arr[left++])
        }

        while (right <= high) {
            temp.push(arr[right++])
        }

        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
    }

    function mergeSort(arr, low, high) {
        if (low >= high) return

        let mid = Math.floor((low + high) / 2)
        mergeSort(arr, low, mid)
        mergeSort(arr, mid + 1, high)
        merge(arr, low, mid, high)
    }

    mergeSort(nums, 0, nums.length - 1)
    return nums
}
// Example usage:
let arr4 = [2, 0, 2, 1, 1, 0];
console.log("sort colors brute force:", sortColorsBruteForce(arr4)); // Output: [0, 0, 1, 1, 2, 2]


// Sort an array of 0's 1's and 2's - better approach - sinlge iteration counting
function sortColorsBetterCounting(nums) {
    let count0 = 0, count1 = 0, count2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) count0++;
        else if (nums[i] === 1) count1++;
        else if (nums[i] === 2) count2++;
    }

    for (let i = 0; i < count0; i++) {
        nums[i] = 0;
    }
    for (let i = count0; i < count0 + count1; i++) {
        nums[i] = 1;
    }
    for (let i = count0 + count1; i < nums.length; i++) {
        nums[i] = 2;
    }
    return nums;
}
// Example usage:
let arr5 = [0, 2, 1, 2, 0, 2, 0, 1];
console.log("sort colors better counting:", sortColorsBetterCounting(arr5)); // Output: [0, 0, 0, 1, 1, 2, 2, 2]


// Sort an array of 0's 1's and 2's - optimal approach - Dutch National Flag Algorithm
function sortColorsOptimalDutchFlag(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] == 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] == 1) {
            mid++
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums;
}
// Example usage:
let arr6 = [2, 0, 1, 2, 1, 0];
console.log("sort colors optimal Dutch Flag:", sortColorsOptimalDutchFlag(arr6)); // Output: [0, 0, 1, 1, 2, 2]


// Majority Element (>n/2 times) - brute force approach
function majorityElementBruteForce(nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                count++;
            }
        }
        if (count > Math.floor(nums.length / 2)) {
            return nums[i];
        }
    }
    return -1;
}
// Example usage:
let arr7 = [3, 2, 3];
console.log("majority element brute force:", majorityElementBruteForce(arr7)); // Output: 3

// Majority Element (>n/2 times) - better approach using hash map
function majorityElementBetterUsingHashMap(nums) {
    const countMap = new Map();
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
        if (countMap.get(num) > Math.floor(nums.length / 2)) {
            return num;
        }
    }
    return -1;
}
// Example usage:
let arr8 = [2, 2, 1, 1, 1, 2, 2];
console.log("majority element better using hash map:", majorityElementBetterUsingHashMap(arr8)); // Output: 2


// Majority Element (>n/2 times) - optimal approach using moore's Voting Algorithm
function majorityElementOptimalMooresVoting(nums) {
    let element;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count == 0) {
            element = nums[i];
        }
        if (nums[i] == element) {
            count++;
        } else {
            count--;
        }
    }
    let count1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == element) {
            count1++;
        }
    }
    if (count1 > Math.floor(nums.length / 2)) {
        return element;
    }
}
// Example usage:
let arr9 = [2, 2, 1, 1, 1, 2, 2, 1, 1];
console.log("majority element optimal Moore's Voting:", majorityElementOptimalMooresVoting(arr9)); // Output: 1


// maximum subarray sum - brute force approach - try all subarrays
function maxSubArrayBruteForce(nums) {
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}
// Example usage:
let arr10 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("maximum subarray sum brute force:", maxSubArrayBruteForce(arr10)); // Output: 6


// maximum subarray sum - optimal approach - Kadane's Algorithm
function maxSubArrayOptimalKadanes(nums) {
    let maxSofar = -Infinity;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > maxSofar) {
            maxSofar = sum;
        }

        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSofar;
}
// Example usage:
let arr11 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("maximum subarray sum optimal Kadane's:", maxSubArrayOptimalKadanes(arr11)); // Output: 6


// follow up problems 
// Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.
function maxSubArrayOptimalKadanesFollowUpProblem(nums) {
    let maxSofar = -Infinity;
    let sum = 0;
    let start = 0;
    let ansStart = 0, ansEnd = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum == 0) {
            start = i;
        }
        sum += nums[i];
        if (sum > maxSofar) {
            maxSofar = sum;
            ansStart = start;
            ansEnd = i;
        }

        if (sum < 0) {
            sum = 0;
        }
    }

    for (let i = ansStart; i <= ansEnd; i++) {
        console.log(nums[i]);
    }
    return maxSofar;
}
// Example usage:
let arr12 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("maximum subarray sum optimal Kadane's follow up problem:", maxSubArrayOptimalKadanesFollowUpProblem(arr12)); // Output: 6 and prints the subarray [4, -1, 2, 1]


// Stock Buy And Sell - brute force approach
function maxProfitBruteForce(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            if (prices[j] > prices[i]) {
                maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
            }
        }
    }
    return maxProfit;
}
// Example usage:
let prices1 = [7, 1, 5, 3, 6, 4];
console.log("stock buy and sell brute force:", maxProfitBruteForce(prices1)); // Output: 5


// Stock Buy And Sell - optimal approach
function maxProfitOptimal(prices) {
    let minPrice = prices[0];
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        let cost = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, cost);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;
}
// Example usage:
let prices2 = [7, 1, 5, 3, 6, 4];
console.log("stock buy and sell optimal:", maxProfitOptimal(prices2)); // Output: 5



// Rearrange the array in alternating positive and negative items - brute force approach
function rearrangeArrayBruteForce(nums) {
    const positive = [];
    const negative = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            positive.push(nums[i]);
        } else {
            negative.push(nums[i]);
        }
    }

    for (let i = 0; i < nums.length / 2; i++) {
        nums[2 * i] = positive[i];
        nums[2 * i + 1] = negative[i];
    }

    return nums;
}
// Example usage:
let arr13 = [3, -2, 1, -5, 4, -1];
console.log("rearrange array brute force:", rearrangeArrayBruteForce(arr13)); // Output: [3, -2, 1, -5, 4, -1]


// Rearrange the array in alternating positive and negative items - optimal approach
function rearrangeArrayOptimal(nums) {
    let posIndex = 0;
    let negIndex = 1;
    let result = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            result[posIndex] = nums[i];
            posIndex += 2;
        } else {
            result[negIndex] = nums[i];
            negIndex += 2;
        }
    }
    return result;
}
// Example usage:
let arr14 = [3, -2, 1, -5, 4, -1, 6, -3];
console.log("rearrange array optimal:", rearrangeArrayOptimal(arr14)); // Output: [3, -2, 1, -5, 4, -1]


// rearrange the array in alternating positive and negative items - optimal approach this follow up problem
// where the number of positive and negative numbers are not equal
// add them at the end without alternating order
function rearrangeArrayOptimalFollowUp(nums) {
    let posIndex = 0;
    let negIndex = 1;
    let result = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            if (posIndex < nums.length) {
                result[posIndex] = nums[i];
                posIndex += 2;
            } else {
                // If positive index exceeds, add to the end
                for (let j = 0; j < nums.length; j++) {
                    if (result[j] === undefined) {
                        result[j] = nums[i];
                        break;
                    }
                }
            }
        } else {
            if (negIndex < nums.length) {
                result[negIndex] = nums[i];
                negIndex += 2;
            } else {
                // If negative index exceeds, add to the end
                for (let j = 0; j < nums.length; j++) {
                    if (result[j] === undefined) {
                        result[j] = nums[i];
                        break;
                    }
                }
            }
        }
    }
    return result;
}
// Example usage:
let arr15 = [3, -2, 1, -5, 2, 3];
console.log("rearrange array optimal follow up:", rearrangeArrayOptimalFollowUp(arr15)); // Output: [3, -2, 1, -5, 4, -1, 6]


// Next Permutation
function nextPermutation(arr) {
    let index = -1
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            index = 1
            break;
        }
    }

    if (index == -1) {
        arr.reverse();
        return
    }

    for (let i = arr.length - 1; i > index; i--) {
        if (arr[i] > arr[index]) {
            [arr[i], arr[index]] = [arr[index], arr[i]]
            break
        }
    }

    let left = index + 1
    let right = arr.length - 1

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }

    return arr
}
let arr16 = [2, 1, 5, 4, 3, 0, 0]
console.log("next Permutation:", nextPermutation(arr16));


// Leaders in an Array problem - brute force
function LeadersArrayBrute(arr) {
    let ans = []

    for (let i = 0; i < arr.length; i++) {
        let Leader = true
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                Leader = false
                break
            }
        }

        if (Leader) {
            ans.push(arr[i])
        }
    }

    return ans
}

let arr17 = [1, 2, 5, 3, 1, 2];
console.log("Leaders in the array are: ", LeadersArrayBrute(arr17));


// Leaders in an Array problem - optimal
function LeadersArrayOptimal(arr) {
    let ans = []

    let max = -Infinity

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > max) {
            ans.push(arr[i])
        }
        max = Math.max(max, arr[i])
    }

    return ans
}
let arr18 = [1, 2, 5, 3, 1, 2];
console.log("Leaders in the array are: ", LeadersArrayOptimal(arr18));


// Longest Consecutive Sequence in an Array - brute force
function longestConsecutiveBruteForce(nums) {
    // If the array is empty
    if (nums.length === 0) {
        return 0;
    }
    const n = nums.length;
    // Initialize the longest sequence length
    let longest = 1;

    // Iterate through each element in the array
    for (let i = 0; i < n; i++) {
        // Current element
        let x = nums[i];
        // Count of the current sequence
        let cnt = 1;

        // Search for consecutive numbers
        while (linearSearch(nums, x + 1)) {
            // Move to the next number in the sequence
            x += 1;
            // Increment the count of the sequence
            cnt += 1;
        }

        // Update the longest sequence length found so far
        longest = Math.max(longest, cnt);
    }
    return longest;
}

function linearSearch(nums, num) {
    const n = nums.length;
    // Traverse through the array
    for (let i = 0; i < n; i++) {
        if (nums[i] === num)
            return true;
    }
    return false;
}

let arr19 = [100, 4, 200, 1, 3, 2];
console.log("The longest consecutive sequence is brute force", longestConsecutiveBruteForce(arr19));


// Longest Consecutive Sequence in an Array - better
function longestConsecutiveBetter(nums) {
    let n = nums.length;

    // Return 0 if array is empty
    if (n === 0) return 0;

    nums.sort((a, b) => a - b);

    // Track last smaller element
    let lastSmaller = -Infinity;
    // Count current sequence length
    let cnt = 0;
    // Track longest sequence length
    let longest = 1;

    for (let i = 0; i < n; i++) {
        // If consecutive number exists
        if (nums[i] - 1 === lastSmaller) {
            // Increment sequence count
            cnt += 1;
            // Update last smaller element
            lastSmaller = nums[i];
        }
        // If consecutive number doesn't exist
        else if (nums[i] !== lastSmaller) {
            // Reset count for new sequence
            cnt = 1;
            // Update last smaller element
            lastSmaller = nums[i];
        }
        // Update longest if needed
        longest = Math.max(longest, cnt);
    }
    return longest;
}

let arr20 = [100, 4, 200, 1, 3, 2];
console.log("The longest consecutive sequence is better", longestConsecutiveBetter(arr20));



// Longest Consecutive Sequence in an Array - optimal
function longestConsecutiveOptimal(nums) {
    let n = nums.length;
    if (n === 0) return 0;

    let longest = 1;
    let st = new Set();

    for (let i = 0; i < n; i++) {
        st.add(nums[i]);
    }

    for (let it of st) {
        if (!st.has(it - 1)) {
            let cnt = 1;
            let x = it;
            while (st.has(x + 1)) {
                x = x + 1;
                cnt = cnt + 1;
            }
            longest = Math.max(longest, cnt);
        }
    }
    return longest;
}

let arr21 = [100, 4, 200, 1, 3, 2];
console.log("The longest consecutive sequence is better", longestConsecutiveOptimal(arr21));