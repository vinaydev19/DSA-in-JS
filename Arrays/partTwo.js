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



