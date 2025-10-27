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