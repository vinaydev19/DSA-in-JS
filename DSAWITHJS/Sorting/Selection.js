// selection sort

function selection_sort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

let arr = [13, 46, 24, 52, 20, 9];
console.log("Before sorting:", arr);
selection_sort(arr);
console.log("After sorting:", arr);


/*
-----------------------------------------------------
🧠 SELECTION SORT — EXPLANATION, PSEUDOCODE & DRY RUN
-----------------------------------------------------

🔹 CONCEPT:
Selection Sort is an in-place comparison-based sorting algorithm.

How it works:
1. Divide the array into a sorted and unsorted part.
2. Repeatedly select the **minimum element** from the unsorted part.
3. Swap it with the first element of the unsorted part.
4. Move the boundary between sorted and unsorted elements forward.
5. Repeat until the entire array is sorted.

Time Complexity:
- Best Case: O(n^2)
- Average Case: O(n^2)
- Worst Case: O(n^2)

Space Complexity:
- O(1) (in-place)

Properties:
- Not stable (unless modified)
- Simple and easy to implement

-----------------------------------------------------
🧩 PSEUDOCODE
-----------------------------------------------------

function selectionSort(arr):
    n = length of arr
    for i from 0 to n-2:
        minIndex = i
        for j from i+1 to n-1:
            if arr[j] < arr[minIndex]:
                minIndex = j
        swap arr[i] and arr[minIndex]

-----------------------------------------------------
🧮 DRY RUN — arr = [13, 46, 24, 52, 20, 9]
-----------------------------------------------------

Initial array:
[13, 46, 24, 52, 20, 9]

Step 1: i = 0
- minIndex = 0 (13)
- Compare 46 → no change
- Compare 24 → no change
- Compare 52 → no change
- Compare 20 → no change
- Compare 9 → minIndex = 5
Swap arr[0] and arr[5] → arr = [9, 46, 24, 52, 20, 13]

Step 2: i = 1
- minIndex = 1 (46)
- Compare 24 → minIndex = 2
- Compare 52 → no change
- Compare 20 → minIndex = 4
- Compare 13 → minIndex = 5
Swap arr[1] and arr[5] → arr = [9, 13, 24, 52, 20, 46]

Step 3: i = 2
- minIndex = 2 (24)
- Compare 52 → no change
- Compare 20 → minIndex = 4
- Compare 46 → no change
Swap arr[2] and arr[4] → arr = [9, 13, 20, 52, 24, 46]

Step 4: i = 3
- minIndex = 3 (52)
- Compare 24 → minIndex = 4
- Compare 46 → no change
Swap arr[3] and arr[4] → arr = [9, 13, 20, 24, 52, 46]

Step 5: i = 4
- minIndex = 4 (52)
- Compare 46 → minIndex = 5
Swap arr[4] and arr[5] → arr = [9, 13, 20, 24, 46, 52]

-----------------------------------------------------
🎯 FINAL RESULT:
Before sorting: [13, 46, 24, 52, 20, 9]
After sorting:  [9, 13, 20, 24, 46, 52]

-----------------------------------------------------
📘 SUMMARY:
- Selection Sort finds the minimum element from the unsorted portion and swaps it.
- Always performs O(n^2) comparisons, regardless of initial array order.
- Simple, in-place, but inefficient for large arrays.
-----------------------------------------------------

*/