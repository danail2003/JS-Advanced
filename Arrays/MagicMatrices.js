function isMatrixValid(matrix) {
    let sumRow = row => matrix[row].reduce((a, b) => a + b);
    let sumCol = col => matrix.map(row => row[col])
        .reduce((a, b) => a + b);

    let isMagic = true;

    if (matrix.length > 0) {
        let targetSum = sumRow(0);

        for (let i = 1; i < matrix.length; i++) {
            let rowSum = sumRow(i);
            if (rowSum !== targetSum) {
                isMagic = false;
            }
        }

        for (let j = 0; j < matrix[0].length; j++) {
            let colSum = sumCol(j);
            if (colSum !== targetSum) {
                isMagic = false;
            }
        }
    }

    console.log(isMagic);
}

isMatrixValid([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);