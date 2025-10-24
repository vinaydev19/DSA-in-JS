// merge sort

function merge(arr, low, mid, high) {
    const temp = []
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left++])
        } else {
            temp.push(arr[right++])
        }
    }

    while (left <= mid) {
        temp.push(arr[left++])
    }

    while (right <= high) {
        temp.push(arr[right++])
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

function mergeSort(arr, low, high) {
    if (low >= high) return

    let mid = Math.floor((low + high) / 2)
    mergeSort(arr, low, mid)
    mergeSort(arr, mid + 1, high)
    merge(arr, low, mid, high)
}


let arr = [5, 2, 8, 4, 1];
console.log("Before merge sorting:", arr);

mergeSort(arr, 0, arr.length - 1);

console.log("After merge sorting:", arr);


/*
-----------------------------------------------------
🧠 MERGE SORT — EXPLANATION, PSEUDOCODE & DRY RUN
-----------------------------------------------------

🔹 CONCEPT:
Merge Sort is a **Divide and Conquer** algorithm.

It works by:
1. Dividing the array into two halves recursively.
2. Sorting each half.
3. Merging the two sorted halves into one sorted array.

-----------------------------------------------------
🧩 PSEUDOCODE
-----------------------------------------------------

function mergeSort(arr, low, high):
    if low >= high:
        return

    mid = floor((low + high) / 2)
    mergeSort(arr, low, mid)        // Sort left half
    mergeSort(arr, mid + 1, high)   // Sort right half
    merge(arr, low, mid, high)      // Merge both halves

function merge(arr, low, mid, high):
    temp = []
    left = low
    right = mid + 1

    // Compare elements of both halves
    while left <= mid and right <= high:
        if arr[left] <= arr[right]:
            temp.push(arr[left])
            left++
        else:
            temp.push(arr[right])
            right++

    // Copy remaining elements from left half
    while left <= mid:
        temp.push(arr[left])
        left++

    // Copy remaining elements from right half
    while right <= high:
        temp.push(arr[right])
        right++

    // Copy sorted elements back into original array
    for i from low to high:
        arr[i] = temp[i - low]

-----------------------------------------------------
🧮 DRY RUN — arr = [5, 2, 8, 4, 1]
-----------------------------------------------------

Initial call:
mergeSort(arr, 0, 4)

Step 1:
low = 0, high = 4 → mid = 2
→ mergeSort(arr, 0, 2)
→ mergeSort(arr, 3, 4)
→ merge(arr, 0, 2, 4)

-----------------------------------------------------
🔸 LEFT SIDE: mergeSort(arr, 0, 2)
low = 0, high = 2 → mid = 1
→ mergeSort(arr, 0, 1)
→ mergeSort(arr, 2, 2)
→ merge(arr, 0, 1, 2)

-- Left part: mergeSort(arr, 0, 1)
low = 0, high = 1 → mid = 0
→ mergeSort(arr, 0, 0)
→ mergeSort(arr, 1, 1)
→ merge(arr, 0, 0, 1)

merge(arr, 0, 0, 1):
Left = [5], Right = [2]
Compare: 2 < 5 → temp = [2]
Left still has 5 → temp = [2, 5]
Copy back → arr = [2, 5, 8, 4, 1]

merge(arr, 0, 1, 2):
Left = [2, 5], Right = [8]
Compare 2 < 8 → temp = [2]
Compare 5 < 8 → temp = [2, 5]
Right still has 8 → temp = [2, 5, 8]
Copy back → arr = [2, 5, 8, 4, 1]

-----------------------------------------------------
🔸 RIGHT SIDE: mergeSort(arr, 3, 4)
low = 3, high = 4 → mid = 3
→ mergeSort(arr, 3, 3)
→ mergeSort(arr, 4, 4)
→ merge(arr, 3, 3, 4)

merge(arr, 3, 3, 4):
Left = [4], Right = [1]
Compare 1 < 4 → temp = [1]
Left still has 4 → temp = [1, 4]
Copy back → arr = [2, 5, 8, 1, 4]

-----------------------------------------------------
🔸 FINAL MERGE: merge(arr, 0, 2, 4)
Left = [2, 5, 8], Right = [1, 4]
Compare 1 < 2 → temp = [1]
Compare 2 < 4 → temp = [1, 2]
Compare 5 > 4 → temp = [1, 2, 4]
Left still has [5, 8] → temp = [1, 2, 4, 5, 8]
Copy back → arr = [1, 2, 4, 5, 8]

-----------------------------------------------------
🎯 FINAL RESULT:
Before: [5, 2, 8, 4, 1]
After:  [1, 2, 4, 5, 8]

-----------------------------------------------------
🧠 TIME & SPACE COMPLEXITY:
-----------------------------------------------------
Time Complexity:
- Best Case: O(N log N)
- Average Case: O(N log N)
- Worst Case: O(N log N)

Space Complexity:
- O(N) (uses temporary array for merging)

-----------------------------------------------------
📘 SUMMARY:
1. Merge Sort divides the array recursively.
2. Merges two sorted halves at each step.
3. Always gives stable and reliable O(N log N) performance.
-----------------------------------------------------

*/