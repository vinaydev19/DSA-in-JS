//Q1:- left rotate an array by one element

/*
let arr = [1, 2, 3, 4, 5]
temp = arr[0]
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
}
arr[arr.length - 1] = temp
console.log(arr);
*/


// Q2:- right rotate an array by one element
/*
let arr = [1, 2, 3, 4, 5]
temp = arr[arr.length - 1]
for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1]
}
arr[0] = temp
console.log(arr);
*/



// TODO:
// Q:- Left and right rotation by k element

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

// merge two sorted arrays 
/*
let arr1 = [1, 3, 5, 7, 9]
let arr2 = [2, 4, 6, 8, 10]
let merge = new Array(arr1.length + arr2.length)
let i = 0, j = 0, k = 0;
while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        merge[k] = arr1[i]
        i++
        k++
    } else {
        merge[k] = arr2[j]
        j++
        k++
    }
}

while (j < arr2.length) {
    merge[k] = arr2[j]
    j++
    k++
}

 iwhile (i < arr1.length) {
    merge[k] = arr2[i]
    i++
    k++
}
console.log(merge);
*/




// Kadane's Algorithm
function maxSubArray(nums) {
    let maxSum = nums[0]
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0
        for (let j = 0; j < nums.length; j++) {
            currentSum = currentSum + nums[j]
            if (currentSum > maxSum) {
                maxSum = currentSum
            }
        }
    }
    return maxSum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
