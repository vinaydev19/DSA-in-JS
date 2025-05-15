let prompt = require("prompt-sync")();

// Check if a Number is Even or Odd
/*
let num = Number(prompt("enter a number that you want to check is even or odd:- "))

// version 
if (isNaN(num)) {
    console.log("pls enter a number only")
} else {
    if (num < 0) {
        console.log("pls enter a number greater than 0")
    } else {
        if (num % 2 === 0) {
            console.log(`${num} that number is even`)
        } else {
            console.log(`${num} that number is old`)
        }
    }
}



// optimized version

if (isNaN(num) || num < 0) console.log("pls enter a number only and greater than 0");
if (num % 2 === 0) {
    console.log(`${num} that number is even`)
} else {
    console.log(`${num} that number is old`)
}
*/


// Compare Two Numbers
/*
let numFirst = Number(prompt("enter a first number that you want to compare:- "))
let numSecond = Number(prompt("enter a second number that you want to compare:- "))

// version 1
if (isNaN(numSecond) || isNaN(numFirst)) {
    console.log("pls enter a number only")
} else {
    if (numFirst > numSecond) {
        console.log(`${numFirst} is greater then ${numSecond}`);
    } else if (numFirst < numSecond) {
        console.log(`${numFirst} is lass then ${numSecond}`);
    } else {
        console.log(`${numFirst} is equal ${numSecond}`);
    }
}

// optimized version
if (isNaN(numSecond) || isNaN(numFirst)) console.log("pls enter a number only")

if (numFirst > numSecond) {
    console.log(`${numFirst} is greater then ${numSecond}`);
} else if (numFirst < numSecond) {
    console.log(`${numFirst} is lass then ${numSecond}`);
} else {
    console.log(`${numFirst} is equal ${numSecond}`);
}
*/



// Leap Year Check
/*
let year = Number(prompt("enter a number that you want to check is leap year or not:- "))

// version 1
if (isNaN(year) || isNaN(year)) {
    console.log("pls enter a number only")
} else {
    if (year < 0) {
        console.log("pls enter a number greater than 0")
    } else {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            console.log(`${year} year is leap year`)
        } else {
            console.log(`${year} year is not leap year`)
        }
    }
}


// optimized version
if (isNaN(year) || isNaN(year)) console.log("pls enter a number only")
if (year < 0) {
    console.log("pls enter a number greater than 0")
} else {
    checkisLeapOrNot(year)
}

function checkisLeapOrNot(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} year is leap year`)
    } else {
        console.log(`${year} year is not leap year`)
    }
}
    */