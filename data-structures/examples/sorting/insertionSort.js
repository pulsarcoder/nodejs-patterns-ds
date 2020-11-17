const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const insertionSort = (arr, counter) => {
    if (counter === arr.length) {
        return;
    }
    const current = arr[counter];
    let j = counter - 1;
    console.log('current, counter, j => ', current, counter, j);
    while (j >= 0 && arr[j] > current) {
        console.log('j => ', j)
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = current;
    console.log('j + 1 => ', j + 1, arr.join(','));
    insertionSort(arr, counter + 1);
}

const arr = [12, 10, 9, 8, 7, 6];
insertionSort(arr, 0);
console.log(arr);