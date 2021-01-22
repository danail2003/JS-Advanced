function checkDiagonalsAreEqual(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    matrix = matrix.map(x => x.split(' ').map(Number));

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i];
        secondDiagonal += matrix[i][matrix.length - i - 1];
    }

    let isDiagonal = (x, y) => x === y || y === matrix[x].length - 1 - x;

    if (firstDiagonal === secondDiagonal) {
        console.log(matrix.map((row, rowIndex) => row.map((e, colIndex) => 
        isDiagonal(rowIndex, colIndex) ? e : firstDiagonal).join(' ')).join('\n'));
    }
    else {
        matrix.forEach(x => console.log(x));
    }
}

checkDiagonalsAreEqual(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);