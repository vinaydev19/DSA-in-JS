// what is hashing
/*
Hashing is a technique to store and retrieve data efficiently. 
Instead of looping through an array every time to count frequencies (brute-force), 
we precompute and store the results in a hash table (or map), then fetch the result in constant time.
*/

// the problem
// Array Frequency Queries
// Array: [1, 2, 1, 3, 2]
// Queries: [1, 3, 4, 2, 10]
// Brute-force approach:
// For query 1 → loop array → count 2
// For query 3 → loop array → count 2
// For query 4 → loop array → count 0
const arr = [1, 2, 1, 3, 2];
const queries = [1, 3, 4, 2, 10];

// Step 1: Precompute frequencies using an object (hash table)
const freqMap = {};
for (let num of arr) {
    if (freqMap[num]) {
        freqMap[num]++;
    } else {
        freqMap[num] = 1;
    }
}

// Step 2: Answer queries
for (let q of queries) {
    console.log(freqMap[q] || 0); // if key doesn't exist, return 0
}


/*
4. Character Hashing

Given string: "abcdabefc"
Queries: ['a', 'c', 'z']
We map each character to an index:
If only lowercase letters: 'a' → 0, 'b' → 1, ..., 'z' → 25
Or just use a hash table in JS (simpler).
JavaScript Implementation for Characters
*/

const str = "abcdabefc";
const charQueries = ['a', 'c', 'z'];

// Step 1: Precompute frequencies
const charFreq = {};
for (let ch of str) {
    if (charFreq[ch]) {
        charFreq[ch]++;
    } else {
        charFreq[ch] = 1;
    }
}

// Step 2: Answer queries
for (let ch of charQueries) {
    // console.log(charFreq[ch] || 0);
}