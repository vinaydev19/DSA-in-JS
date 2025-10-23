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
