// what is Recursion in JavaScript?
// Recursion in JavaScript is a programming technique where a function calls itself in order to solve a problem.
// This approach is often used for problems that can be broken down into smaller, similar subproblems.
// A recursive function typically has two main components: a base case that stops the recursion and a recursive case that continues the recursion.
// understand the concept of Recursion with the help this https://takeuforward.org/recursion/introduction-to-recursion-understand-recursion-by-printing-something-n-times/


// this my notes recursion is a function that calls itself in order to solve a problem
// if no base case is defined then it will run infinite times and will give stack overflow error
// what is stack overflow is when the call stack exceeds its limit
// in simple words stack overflow is when there are too many function calls in the call stack then memory limit is exceeded and program crashes
// if base case is defined then it will stop when base case is reached
// recursion tree is a tree data structure that is used to represent the recursive calls made by a function

// basic recursion problems
// 1. Print your name n times
function printNameNtimes(name, n) {
    if (n === 0) {
        return;
    }
    console.log(name);
    printNameNtimes(name, n - 1);
}

// printNameNtimes("vinay", 5); // prints "vinay" 5 times

// Print 1 to N using recursion
function print1toN(current, n) {
    if (current > n) {
        return null;
    }
    console.log(current);
    print1toN(current + 1, n);
}
// print1toN(1, 5); // prints 1 2 3 4 5

// using backtracking
function print1toNBacktrack(n) {
    if (n === 0) {
        return null;
    }
    print1toNBacktrack(n - 1);
    console.log(n);
}
// print1toNBacktrack(5); // prints 1 2 3 4 5

// Print N to 1 using forward recursion
function printNto1(current) {
    if (current < 1) {
        return null;
    }
    console.log(current);
    printNto1(current - 1);
}
// printNto1(5); // prints 5 4 3 2 1

// using backtracking
function printNto1Backtrack(current, n) {
    if (current > n) {
        return null;
    }
    printNto1Backtrack(current + 1, n);
    console.log(current);
}
// printNto1Backtrack(1, 5); // prints 5 4 3 2 1


// Sum of first N numbers - using parameterized recursion
function sumOfN(n, sum = 0) {
    if (n < 1) return sum;

    return sumOfN(n - 1, sum + n);
}

console.log(sumOfN(5, 0)); // prints 15 (1+2+3+4+5)

// Sum of first N numbers - using functional recursion
function sumOfNFunctional(n) {
    if (n === 1) return 1;

    return n + sumOfNFunctional(n - 1);
}
console.log(sumOfNFunctional(5)); // prints 15 (1+2+3+4+5)



// Factorial of N numbers - using functional recursion
function factorial(n) {
    if (n === 0 || n === 1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5)); // prints 120 (5*4*3*2*1)


// Factorial of N numbers - using parameterized recursion
function factorialParam(n, fact = 1) {
    if (n === 0 || n === 1) return fact;

    return factorialParam(n - 1, fact * n);
}

console.log(factorialParam(5, 1)); // prints 120 (5*4*3*2*1)


// Reverse an array - using recursion and two pointers
function reverseArray(arr, start, end) {
    if (start >= end) return;

    // swap
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    reverseArray(arr, start + 1, end - 1);
}
let arr = [1, 2, 3, 4, 5];
reverseArray(arr, 0, arr.length - 1);
console.log(arr); // prints [5, 4, 3, 2, 1]

// reverse an array - using recursion and single pointer
function reverseArraySinglePointer(arr, index) {
    if(index >= arr.length / 2) return;

    // swap
    let temp = arr[index];
    arr[index] = arr[arr.length - 1 - index];
    arr[arr.length - 1 - index] = temp;
    reverseArraySinglePointer(arr, index + 1);
}

let arr2 = [1, 2, 3, 4, 5];
reverseArraySinglePointer(arr2, 0);
console.log(arr2); // prints [5, 4, 3, 2, 1]


// Check if a string is palindrome or not
function isPalindrome(i, str) {
    if (i >= str.length / 2) return true;

    if (str[i] !== str[str.length - 1 - i]) return false;

    return isPalindrome(i + 1, str);
}

console.log(isPalindrome(0, "racecar")); // prints true
console.log(isPalindrome(0, "hello")); // prints false


// Fibonacci Number
function fibonacci(n) {
    if (n <= 1) return n;

    let last = fibonacci(n - 1);
    let secondLast = fibonacci(n - 2);
    return last + secondLast;
}
console.log(fibonacci(6)); // prints 8 (0, 1, 1, 2, 3, 5, 8)
