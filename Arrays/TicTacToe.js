function playingTicTacToe(array) {
    const matrix = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let player = 'X';
    let isFalse = false;

    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(' ');
        let firstElement = Number(elements[0]);
        let secondElement = Number(elements[1]);

        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j].includes(false)) {
                isFalse = true;
                break;
            }
            else {
                isFalse = false;
            }
        }

        if (!isFalse) {
            break;
        }

        if (matrix[firstElement][secondElement] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        matrix[firstElement][secondElement] = player;

        if (matrix[0][0] == matrix[0][1] && matrix[0][1] == matrix[0][2] && matrix[0][0] == player) {
            console.log(`Player ${player} wins!`);
            break;
        }
        else if (matrix[1][0] == matrix[1][1] && matrix[1][1] == matrix[1][2] && matrix[1][0] == player) {
            console.log(`Player ${player} wins!`);
            break;
        }
        else if (matrix[2][0] == matrix[2][1] && matrix[2][1] == matrix[2][2] && matrix[2][0] == player) {
            console.log(`Player ${player} wins!`);
            break;
        }
        else if (matrix[0][0] == matrix[1][0] && matrix[1][0] == matrix[2][0] && matrix[0][0] == player) {
            console.log(`Player ${player} wins!`);
            break;
        }
        else if (matrix[0][1] == matrix[1][1] && matrix[1][1] == matrix[2][1] && matrix[0][1] == player) {
            console.log(`Player ${player} wins!`);
            break;
        }
        else if (matrix[0][2] == matrix[1][2] && matrix[1][2] == matrix[2][2] && matrix[0][2] == player) {
            console.log(`Player ${player} wins!`);
            break;
        }
        else if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2] && matrix[0][0] == player) {
            console.log(`Player ${player} wins!`);
            break;
        }
        else if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0] && matrix[0][2] == player) {
            console.log(`Player ${player} wins!`);
            break;
        }

        player = player === 'X' ? 'O' : 'X';
    }

    if (!isFalse) {
        console.log('The game ended! Nobody wins :(');
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}

playingTicTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);