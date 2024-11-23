// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5


// Solution #1 - Brute Force Approach
// 1 => take a input array 
// 2 => then we store unique it mean we store value tha occur only one time
// 3 => then we sort a array to descending order
// 4 => then we check if array is only one value it do not have any second largest number 
// 4 => if array is length more then 2 return second largest number else -1


function secondLargestNumber(arr){
    const uniqueArr = Array.from(new Set(arr))

    uniqueArr.sort((a,b)=>b-a)

    if(uniqueArr.length >= 2){
        return uniqueArr[1]
    }else{
        return -1
    }
}

// console.log(secondLargestNumber([12, 35, 1, 10, 34, 1]));
// console.log(secondLargestNumber([10, 5, 10]));


// and the Time Complexity is O(nlogn)


// Solution #2 - Optimised Approach
function secondLargestNumberInArray(arr){
    let largest = Number.NEGATIVE_INFINITY
    let secondLargest = Number.NEGATIVE_INFINITY


    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }else if(arr[i] != largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(secondLargestNumberInArray([12, 35, 1, 10, 34, 1]));
console.log(secondLargestNumberInArray([10, 5, 10]));