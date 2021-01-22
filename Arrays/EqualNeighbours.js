function countEquals(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length - 1; j++) {
            if (array[i][j] == array[i][j + 1]) {
                count++;
            }
        }
    }

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == array[i + 1][j]) {
                count++;
            }
        }
    }

    console.log(count);
}

countEquals([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]);