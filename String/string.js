
// String Iteration in JavaScript
/*
let str = "Hello World"
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
*/

// reverse
/*
let str = "Hello World"
let reversedStr = "";
for(let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr);
*/


let prompt = require("prompt-sync")();

// Check if a string is a palindrome with extra spaces
/*
let str = prompt("Enter a string: ");
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

if (reversedStr === str) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}*/


// Check if a string is a palindrome without extra spaces
/*
let str = prompt("Enter a string: ");
let i = 0, j = str.length - 1;
let isPalindrome = true;

while (i < j) {
    if (str.charAt(i) !== str.charAt(j)) {
        isPalindrome = false;
        break;
    }
    i++;
    j--;
}

if (isPalindrome) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}
    */


// toggle case of a string
/*
let str = prompt("Enter a string: ");

let toggledStr = "";
for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        // Uppercase to lowercase
        toggledStr += String.fromCharCode(str.charCodeAt(i) + 32);
    }
    else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        // Lowercase to uppercase
        toggledStr += String.fromCharCode(str.charCodeAt(i) - 32);
    } else {
        // Non-alphabetic characters remain unchanged
        toggledStr += ch;
    }
}

console.log(toggledStr);
*/

// frequency of characters in a string
/*
let str = prompt("Enter a string: ");
let arr = new Array(256).fill(0);
for (let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i);
    arr[index] += 1;
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        console.log(`Character '${String.fromCharCode(i)}' occurs ${arr[i]} times.`);
    }
}
*/


// frequency of characters in a string using object
let str = prompt("Enter a string: ");
let frequency = {};
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}
for (let char in frequency) {
    console.log(`Character '${char}' occurs ${frequency[char]} times.`);
}

