// Count digits in a number

function countDigits(number) {
    let count = 0;
    while (number > 0) {
        let lastDigit = number % 10;
        count++;
        number = Math.floor(number / 10);
    }
    return count;
}
// Example usage:
console.log(countDigits(12345)); // Output: 5

// second Method: use Logarithm
function countDigitsLog(number) {
    let count = Math.floor(Math.log10(number)) + 1;

    return count;
}
// Example usage:
// console.log(countDigitsLog(12345)); // Output: 5

// what is time complexity of above two methods?
// Both methods have a time complexity of O(d), where d is the number of digits in the number. The first method iterates through each digit, while the second method uses a logarithmic calculation which is constant time, but the overall complexity is still considered O(d) due to the nature of digit counting.


// Reverse a Number
function reverseNumber(number) {
    let reversed = 0;
    const sign = number < 0 ? -1 : 1;
    number = Math.abs(number);

    while (number > 0) {
        let lastDigit = number % 10;
        reversed = reversed * 10 + lastDigit;
        number = Math.floor(number / 10);
    }
    res = reversed * sign;

    if (reversed > 2 ** 31 - 1 || reversed < -(2 ** 31)) {
        return 0;
    }

    return reversed
}

// Example usage:
console.log(reverseNumber(12345)); // Output: 54321 
console.log(reverseNumber(-12345)); // Output: -54321

	
// Check Palindrome

function isPalindrome(number) {
    if (number < 0) return false; // Negative numbers are not palindromes

    let original = number;
    let reversed = 0;

    while (number > 0) {
        let lastDigit = number % 10;
        reversed = reversed * 10 + lastDigit;
        number = Math.floor(number / 10);
    }

    return original === reversed;
}

// Example usage:
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(-12321)); // Output: false


// Armstrong Numbers
function isArmstrong(number){
    let original = number;
    let sum = 0;
    
    while(number > 0){
        let digit = number % 10;
        sum += digit ** 3; // assuming 3-digit numbers
        number = Math.floor(number / 10);
    }

    return sum === original;
}

// Example usage:
console.log(isArmstrong(153)); // Output: true
console.log(isArmstrong(123)); // Output: false


// Print all Divisors
function printDivisors(number){
    let divisors = [];
    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            divisors.push(i);
        }
    }
    return divisors;
}

// Example usage:
console.log(printDivisors(28)); // Output: [1, 2, 4, 7, 14, 28]

// better approach to print all divisors
function printDivisorsOptimized(number){
    let divisors = [];
    for(let i = 1; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            divisors.push(i);
            if(number / i !== i){
                divisors.push(number / i);
            }
        }
    }
    divisors.sort((a, b) => a - b); // Optional: sort the divisors
    return divisors;
}
// Example usage:
console.log(printDivisorsOptimized(28)); // Output: [1, 2, 4, 7, 14, 28]


// Check for Prime - prime is a number which is divisible by only 1 and itself
function isPrime(number){
    if(number <= 1) return false;
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(isPrime(29)); // Output: true
console.log(isPrime(30)); // Output: false


// GCD Or HCF
function gcd(a, b){
    while(b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
// Example usage:
console.log(gcd(56, 98)); // Output: 14
console.log(gcd(101, 10)); // Output: 1