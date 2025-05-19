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