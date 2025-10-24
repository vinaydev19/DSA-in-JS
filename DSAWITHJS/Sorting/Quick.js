// Quick sort

function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high)

        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)
    }
}

function partition(arr, low, high) {
    let pivot = arr[high]
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;
}

let arr = [13, 46, 24, 52, 20, 9];
console.log("Before sorting:", arr);

quickSort(arr, 0, arr.length - 1);

console.log("After quick sorting:", arr);

/*
-----------------------------------------------------
🧠 QUICK SORT — EXPLANATION, PSEUDOCODE & DRY RUN
-----------------------------------------------------

🔹 CONCEPT:
Quick Sort is a Divide & Conquer algorithm.
It works by choosing a "pivot" element and placing it in its correct sorted position.
Then it recursively sorts the left and right parts around the pivot.

Steps:
1. Choose a pivot (commonly the last element).
2. Partition the array so that:
   - All elements smaller than pivot go to the left.
   - All elements greater than pivot go to the right.
3. Recursively repeat for left and right parts.

-----------------------------------------------------
🧩 PSEUDOCODE
-----------------------------------------------------
function quickSort(arr, low, high):
    if low < high:
        pivotIndex = partition(arr, low, high)
        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)

function partition(arr, low, high):
    pivot = arr[high]
    i = low - 1

    for j from low to high - 1:
        if arr[j] <= pivot:
            i++
            swap(arr[i], arr[j])

    swap(arr[i + 1], arr[high])
    return i + 1  // pivot's correct position

-----------------------------------------------------
🧮 DRY RUN — arr = [13, 46, 24, 52, 20, 9]
-----------------------------------------------------

Initial Call:
quickSort(arr, 0, 5)

Step 1: partition(arr, 0, 5)
pivot = 9
i = -1

Compare elements with pivot:
j=0 → 13 > 9 → no swap
j=1 → 46 > 9 → no swap
j=2 → 24 > 9 → no swap
j=3 → 52 > 9 → no swap
j=4 → 20 > 9 → no swap

Now swap pivot (9) with arr[i+1] = arr[0]
arr = [9, 46, 24, 52, 20, 13]
pivotIndex = 0

→ Left: quickSort(arr, 0, -1)  (nothing)
→ Right: quickSort(arr, 1, 5)

-----------------------------------------------------
Step 2: quickSort(arr, 1, 5)
partition(arr, 1, 5)
pivot = 13
i = 0

j=1 → 46 > 13 → no swap
j=2 → 24 > 13 → no swap
j=3 → 52 > 13 → no swap
j=4 → 20 > 13 → no swap

swap pivot (13) with arr[i+1] = arr[1]
arr = [9, 13, 24, 52, 20, 46]
pivotIndex = 1

→ Left: quickSort(arr, 1, 0) (nothing)
→ Right: quickSort(arr, 2, 5)

-----------------------------------------------------
Step 3: quickSort(arr, 2, 5)
partition(arr, 2, 5)
pivot = 46
i = 1

j=2 → 24 <= 46 → i=2 swap(24,24)
j=3 → 52 > 46 → no swap
j=4 → 20 <= 46 → i=3 swap(52,20)

arr after loop: [9, 13, 24, 20, 52, 46]
swap pivot (46) with arr[i+1] = arr[4]
arr = [9, 13, 24, 20, 46, 52]
pivotIndex = 4

→ Left: quickSort(arr, 2, 3)
→ Right: quickSort(arr, 5, 5) (nothing)

-----------------------------------------------------
Step 4: quickSort(arr, 2, 3)
partition(arr, 2, 3)
pivot = 20
i = 1

j=2 → 24 > 20 → no swap

swap pivot (20) with arr[i+1] = arr[2]
arr = [9, 13, 20, 24, 46, 52]
pivotIndex = 2

→ Left: quickSort(arr, 2, 1) (nothing)
→ Right: quickSort(arr, 3, 3) (nothing)

-----------------------------------------------------
🎯 FINAL RESULT:
arr = [9, 13, 20, 24, 46, 52]

-----------------------------------------------------
🧠 TIME COMPLEXITY:
Best / Average Case: O(N log N)
Worst Case: O(N²)  (if array is already sorted)
Space Complexity: O(1)  (in-place)
-----------------------------------------------------

*/