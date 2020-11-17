const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const selectionSort = (arr, counter) => {
    if (counter === arr.length) {
        return;
    }
    let minIndex = -1;
    for (let i = counter; i < arr.length; i++) {
        if (arr[i] < arr[counter]) {
            minIndex = i;
        }
    }
    if (minIndex > -1)
        swap(arr, counter, minIndex);
    selectionSort(arr, counter + 1);
}

const arr = [12, 10, 9, 8, 7, 6];
selectionSort(arr, 0);
console.log(arr);