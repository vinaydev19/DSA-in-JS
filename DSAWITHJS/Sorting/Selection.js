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