/*
let arr = [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
// console.log(sum);
*/


/*
let arr = [1, 2, 3, 4, 5]

let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
// console.log(max);
*/

/*
let arr = [1, 2, 3, 4, 5]
let min = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
}
// console.log(min);
*/



/*
let arr = [1, 2, 3, 4, 5]
let arr1 = [10, 30, 56, 43, 29, 64, 49, 60]
let fMax = Math.max(arr1[0], arr1[1])
let sMax = Math.min(arr1[0], arr1[1])
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > fMax) {
        sMax = fMax
        fMax = arr1[i]
    } else if (arr1[i] > sMax && max !== arr1[i]) {
        sMax = arr1[i]
    }
}
// console.log(sMax);
*/


/*
let arr = [1, 2, 3, 4, 5]
let temp = new Array(arr.length)
let j = 0
for (let i = arr.length - 1; i >= 0; i--) {
    temp[j] = arr[i]
    j++
}
console.log(temp);
*/




let arr = [1, 2, 3, 4, 5, 6]
let i = 0;
let j = arr.length - 1
while (i != j && i<j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    j--
    i++
}
console.log(arr);


/*
working
[1, 2, 3, 4, 5] old
[5, 2, 3, 4, 1] new
i = 0
j = arr.length - 1 what is length of arr is 5 -1 = 4
while loop
let temp = arr[i] what is value of temp 1 index 0
arr[i] = arr[j] what is value of i = 5, index 4
arr[j] = temp
the i increased and j decreased

i = 1
j = 3
while loop 
let temp = arr[i] what is value of temp 2 index 1
arr[i] = arr[j] what is value of i = 4, index 3
arr[j] = temp what is value of temp 2 index 1
the i increased and j decreased


i = 2
j = 2
i == j it mean it run the loop aigne
*/



/*
let arr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
let i = 0
j = 0
while (i < arr.length) {
    if (arr[i] == 0) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
    i++
}
console.log(arr);
*/



/*
let arr = [-2, 2, -3, 1, -2, 1, -6, 3, -2, 4, -4, 1]
// [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
let i = 0
j = 0
while (i < arr.length) {
    if (arr[i] < 0) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
    i++
}
console.log(arr);
*/