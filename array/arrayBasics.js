// Arrays- Decalaration
let arr = ["apple", "banana", "cherry"];

// array - access array elements
// this access first element of array
// console.log(arr[0]);

// What all can array store? like number, string, array, object, bools, etc all js data type can add in array

// Array length Property
// console.log(arr.length);

// Arrays - Add and Remove Elements in last of array

// Add to End of the Array
// arr.push("orange")
// console.log(arr);

// remove to End of the Array
// arr.pop()
// arr.pop()
// console.log(arr);

// Arrays - Add and Remove Elements in first of array

// Add to top of the Array
// arr.unshift("orange")
// console.log(arr);

// remove to top of the Array
// arr.shift()
// arr.shift()
// console.log(arr);

/* NOTE: that push and pop are more performant than shift and unshift so if you're working on a 
large arrays it's essential to consider the performance while deciding which method to use now*/

// looping an array
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
  // console.log(arr[i]);
  i++;
}

// map in js
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const mapOfNumber = number.map((item, index, array) => {
  // console.log(`the element ${item} and its index is ${index} and of ${array}`);
  return item + 5;
});

// console.log(mapOfNumber);

// filter in js
const filterOfNumber = number.filter((item, index, array) => {
  return item > 5;
});
// console.log(filterOfNumber);

// reduce in js
const reduceOfNumber = number.reduce((prev, item, index, array) => {
  return prev + item;
}, 2);
// console.log(reduceOfNumber);

// some in js
const someOfNumber = number.some((item, index, array) => {
  return item > 21;
});
// console.log(someOfNumber);

// every in js
const everyOfNumber = number.every((item, index, array) => {
  return item > 15;
});
// console.log(everyOfNumber);

// find in js
const findOfNumber = number.find((item, index, array) => {
  return item > 3;
});
// console.log(findOfNumber);

// findIndex
const index = number.findIndex((item) => item === 2);
// console.log(index);

// Spread and Rest Operators

const number1 = [1, 2, 3, 4, 5];
const number2 = [6, 7, 8, 9];

// Spread Operators
const finalNumber = [...number1, ...number2];
// console.log(finalNumber);

// rest operators

function sumOfArray(...number) {
  return number;
}

// console.log(sumOfArray(number1, number2));

// more array method

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5, 6];

// concat
const concatArr = arr1.concat(arr2);
// console.log(concatArr);

// slice
// const sliceArr = arr1.slice(0,2)
// console.log(sliceArr);

// splice
// console.log(arr2);
// const spliceArr = arr2.splice(0,2, 9)
// console.log(arr2);
// console.log(spliceArr);

// fill

let dummy = [4, 65, 8, 6];
// console.log(dummy.fill(0));

// flat

const flatArr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
// console.log(flatArr.flat(2));



// reverse
// console.log(arr1);
// arr1.reverse()
// console.log(arr1);


const unsort = [8,6,9,54,1,65,42,76,21,]
const sort = unsort.sort((a,b)=> a - b)
console.log(sort);

