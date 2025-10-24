function insertionSort(arr) {
    let n = arr.length;

    // Outer loop: iterate over each element
    for (let i = 1; i < n; i++) {
        let j = i;

        // Inner loop: shift elements in the sorted part to the right
        while (j > 0 && arr[j - 1] > arr[j]) {
            // Swap arr[j] and arr[j-1]
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;

            j--; // move left
        }
    }
}

// Example usage
let arr = [13, 46, 24, 52, 20, 9];
console.log("Before sorting:", arr);

insertionSort(arr);

console.log("After sorting:", arr);


/*
-----------------------------------------------------
🧠 INSERTION SORT — EXPLANATION, PSEUDOCODE & DRY RUN
-----------------------------------------------------

🔹 CONCEPT:
Insertion Sort is a simple, in-place, and stable sorting algorithm.

It works by:
1. Assuming the first element is sorted.
2. Taking the next element and inserting it into the correct position in the sorted part.
3. Repeating until the entire array is sorted.

Time Complexity:
- Best Case: O(n)     (array already sorted)
- Average Case: O(n^2)
- Worst Case: O(n^2)  (array in descending order)

Space Complexity:
- O(1) (in-place, no extra array)

-----------------------------------------------------
🧩 PSEUDOCODE
-----------------------------------------------------

function insertionSort(arr):
    n = length of arr

    for i from 1 to n-1:         // iterate over each element
        j = i
        while j > 0 and arr[j-1] > arr[j]:   // shift larger elements right
            swap arr[j] and arr[j-1]
            j = j - 1

-----------------------------------------------------
🧮 DRY RUN — arr = [13, 46, 24, 52, 20, 9]
-----------------------------------------------------

Initial array:
[13, 46, 24, 52, 20, 9]

Step 1: i = 1, arr[i] = 46
- j = 1, compare arr[0] = 13 and arr[1] = 46 → 13 < 46 → no swap
Array remains: [13, 46, 24, 52, 20, 9]

Step 2: i = 2, arr[i] = 24
- j = 2, compare arr[1] = 46 > 24 → swap → arr = [13, 24, 46, 52, 20, 9]
- j = 1, compare arr[0] = 13 < 24 → stop
Array now: [13, 24, 46, 52, 20, 9]

Step 3: i = 3, arr[i] = 52
- j = 3, compare arr[2] = 46 < 52 → no swap
Array remains: [13, 24, 46, 52, 20, 9]

Step 4: i = 4, arr[i] = 20
- j = 4, compare arr[3] = 52 > 20 → swap → arr = [13, 24, 46, 20, 52, 9]
- j = 3, compare arr[2] = 46 > 20 → swap → arr = [13, 24, 20, 46, 52, 9]
- j = 2, compare arr[1] = 24 > 20 → swap → arr = [13, 20, 24, 46, 52, 9]
- j = 1, compare arr[0] = 13 < 20 → stop
Array now: [13, 20, 24, 46, 52, 9]

Step 5: i = 5, arr[i] = 9
- j = 5, compare arr[4] = 52 > 9 → swap → arr = [13, 20, 24, 46, 9, 52]
- j = 4, compare arr[3] = 46 > 9 → swap → arr = [13, 20, 24, 9, 46, 52]
- j = 3, compare arr[2] = 24 > 9 → swap → arr = [13, 20, 9, 24, 46, 52]
- j = 2, compare arr[1] = 20 > 9 → swap → arr = [13, 9, 20, 24, 46, 52]
- j = 1, compare arr[0] = 13 > 9 → swap → arr = [9, 13, 20, 24, 46, 52]
- j = 0 → stop
Array now: [9, 13, 20, 24, 46, 52]

-----------------------------------------------------
🎯 FINAL RESULT:
Before sorting: [13, 46, 24, 52, 20, 9]
After sorting:  [9, 13, 20, 24, 46, 52]

-----------------------------------------------------
📘 SUMMARY:
- Builds the sorted array one element at a time.
- In-place, stable, and simple to implement.
- Efficient for small arrays or nearly sorted arrays.
-----------------------------------------------------

*/