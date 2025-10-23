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