function bubbleSort(arr) {
    let n = arr.length;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

let arr = [13, 46, 24, 52, 20, 9];
console.log("Before sorting:", arr);
bubbleSort(arr);
console.log("After sorting:", arr);


/*
-----------------------------------------------------
🧠 BUBBLE SORT — EXPLANATION, PSEUDOCODE & DRY RUN
-----------------------------------------------------

🔹 CONCEPT:
Bubble Sort is a simple, comparison-based sorting algorithm.

How it works:
1. Repeatedly step through the array.
2. Compare adjacent elements.
3. Swap them if they are in the wrong order.
4. After each full pass, the largest unsorted element "bubbles" to its correct position.
5. Repeat until the array is sorted.

Time Complexity:
- Best Case: O(n)     (if optimized with early exit)
- Average Case: O(n^2)
- Worst Case: O(n^2)

Space Complexity:
- O(1) (in-place)

-----------------------------------------------------
🧩 PSEUDOCODE
-----------------------------------------------------

function bubbleSort(arr):
    n = length of arr
    for i from n-1 down to 0:
        for j from 0 up to i-1:
            if arr[j] > arr[j+1]:
                swap arr[j] and arr[j+1]

-----------------------------------------------------
🧮 DRY RUN — arr = [13, 46, 24, 52, 20, 9]
-----------------------------------------------------

Initial array:
[13, 46, 24, 52, 20, 9]

Pass 1 (i = 5):
- Compare 13 & 46 → 13 < 46 → no swap
- Compare 46 & 24 → swap → arr = [13, 24, 46, 52, 20, 9]
- Compare 46 & 52 → no swap
- Compare 52 & 20 → swap → arr = [13, 24, 46, 20, 52, 9]
- Compare 52 & 9 → swap → arr = [13, 24, 46, 20, 9, 52]

Pass 2 (i = 4):
- Compare 13 & 24 → no swap
- Compare 24 & 46 → no swap
- Compare 46 & 20 → swap → arr = [13, 24, 20, 46, 9, 52]
- Compare 46 & 9 → swap → arr = [13, 24, 20, 9, 46, 52]

Pass 3 (i = 3):
- Compare 13 & 24 → no swap
- Compare 24 & 20 → swap → arr = [13, 20, 24, 9, 46, 52]
- Compare 24 & 9 → swap → arr = [13, 20, 9, 24, 46, 52]

Pass 4 (i = 2):
- Compare 13 & 20 → no swap
- Compare 20 & 9 → swap → arr = [13, 9, 20, 24, 46, 52]

Pass 5 (i = 1):
- Compare 13 & 9 → swap → arr = [9, 13, 20, 24, 46, 52]

-----------------------------------------------------
🎯 FINAL RESULT:
Before sorting: [13, 46, 24, 52, 20, 9]
After sorting:  [9, 13, 20, 24, 46, 52]

-----------------------------------------------------
📘 SUMMARY:
- Bubble Sort repeatedly swaps adjacent elements.
- Largest elements "bubble" to the end in each pass.
- Simple to implement, but inefficient for large arrays (O(n^2)).
- Works in-place and is stable.
-----------------------------------------------------

*/