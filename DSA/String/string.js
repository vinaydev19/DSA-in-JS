/*
let str = "Hello, World!";

// methods to string
// 1. length
console.log(str.length); // 13

// 2. Slice (start, end) - end not included in the output string 
// slice used to extract a part of the string - returns a new string - does not modify the original string
console.log(str.slice(0, 5)); // Hello

// 3. substring (start, end) - end not included in the output string
// substring used to extract a part of the string - returns a new string - does not modify the original string
console.log(str.substring(0, 5)); // Hello

// ToUpperCase() - converts the string to uppercase
console.log(str.toUpperCase()); // HELLO, WORLD!

// ToLowerCase() - converts the string to lowercase
console.log(str.toLowerCase()); // hello, world!

// trim() - removes whitespace from both ends of the string
let str2 = "   Hello, World!   ";
console.log(str2.trim()); // "Hello, World!"

// concat() - concatenates two or more strings
let str3 = " How are you?";
console.log(str.concat(str3)); // Hello, World! How are you?

// indexOf() - returns the index of the first occurrence of a specified value in a string
console.log(str.indexOf("d")); // 7

// lastIndexOf() - returns the index of the last occurrence of a specified value in a string
console.log(str.lastIndexOf("o")); // 8

// includes() - checks if a string contains a specified value
console.log(str.includes("World")); // true

// startsWith() - checks if a string starts with a specified value
console.log(str.startsWith("Hello")); // true

// endsWith() - checks if a string ends with a specified value
console.log(str.endsWith("!")); // true

// charAt() - returns the character at a specified index
console.log(str.charAt(0)); // H

// charCodeAt() - returns the Unicode of the character at a specified index
console.log(str.charCodeAt(0)); // 72

// split() - splits a string into an array of substrings
// split by space character - default - if no parameter is passed
console.log(str.split(" ")); // [ 'Hello,', 'World!' ]

// replace() - replaces a specified value with another value in a string
console.log(str.replace("World", "JavaScript")); // Hello, JavaScript!

// repeat() - repeats a string a specified number of times
console.log(str.repeat(2)); // Hello, World!Hello, World!

// template literals - using backticks ``
let name = "John";
let age = 30;
let greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting); // My name is John and I am 30 years old.

// escape characters - using backslash \
let text = "He said, \"Hello, World!\"";
console.log(text); // He said, "Hello, World!"
*/

/*
let str = "Hello, World!";
// loop through a string
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
*/


let str = "Hello, World!";
// loop reverse through a string
let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
}
// console.log(reverseStr); // !dlroW ,olleH



// check if a string is a palindrome - use two pointer approach
function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false


// toggle each character in a string
function toggleString(s) {
    let toggledStr = "";
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);

        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            // uppercase to lowercase
            toggledStr += char.toLowerCase();
        } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
            // lowercase to uppercase
            toggledStr += char.toUpperCase();
        } else {
            // special characters and numbers remain the same
            toggledStr += char;
        }
    }
    return toggledStr;
}
// console.log(toggleString("HeLLo, WorLd!")); // hELLO, wORLD!
// console.log(toggleString("JaVScriPt123")); // jAVAsCRIPT123


// frequency of each character in a string

function charFrequency(s) {
    let arr = new Array(128).fill(0); // ASCII characters

    for (let i = 0; i < arr.length; i++) {
        let index = s.charCodeAt(i);
        arr[index] = arr[index] + 1;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(String.fromCharCode(i) + " : " + arr[i]);
        }
    }
}

charFrequency("Hello, World!")