function printNumbersLikeSpiral(width, height) {
    let matrix = [];
    let row = 0;
    let column = 0;
    let minX = 0;
    let minY = 0;
    let maxX = width - 1;
    let maxY = height - 1;
    let stepX = 0;
    let stepY = 0;

    for (let i = 0; i < width; i++) {
        matrix[i] = new Array(height).fill(0);
    }

    for (let i = 1; i <= height * width; i++) {
        if (column === minX && row === minY) {
            stepX = 1;
            stepY = 0;

            if (i !== 1) {
                maxY--;
            }
        }
        else if (row === minY && column === maxX) {
            stepX = 0;
            stepY = 1;

            if (minY != 0) {
                minX++;
            }
        }
        else if (column === maxX && row === maxY) {
            stepX = -1;
            stepY = 0;
            minY++;
        }
        else if (row === maxY && column === minX) {
            stepX = 0;
            stepY = -1;
            maxX--;
        }

        matrix[row][column] = i;
        row += stepY;
        column += stepX;
    }

    matrix.forEach(x => console.log(x.join(' ')));
}

printNumbersLikeSpiral(5, 5);