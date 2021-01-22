function sumDiagonals(matrix) {
    let sumOfFirstDiagonal = 0;
    let sumOfSecondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumOfFirstDiagonal += matrix[i][i];
        sumOfSecondDiagonal += matrix[i][matrix.length - i - 1];
    }

    console.log(`${sumOfFirstDiagonal} ${sumOfSecondDiagonal}`);
}

sumDiagonals([[20, 40], [10, 60]]);