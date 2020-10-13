const swap = (arr, firstIdx, secondIdx) => {
    const temp = arr[firstIdx];
    arr[firstIdx] = arr[secondIdx];
    arr[secondIdx] = temp;
};

const bubbleSort = (arr) => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for(let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}

console.log(bubbleSort([3, 0, 2, 5, -1, 4, 1]));

