const print3x3 = (arr, row, col) => {
    if (row === 3) {
        return;
    } else {
        for (let i = 0; i < 3; i++) {
            console.log(arr[row][i]);
        }
        print3x3(arr, row + 1, col);
    }
}

print3x3([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0, 0);