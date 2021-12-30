const moveZeroes = (array) => {
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            for (let j = i; j < array.length - 1; j++) {
                array[j] = array[j + 1];
            }

            array[array.length - 1] = 0;
            i--;
        }

        counter++;
        if (counter == array.length) {
            break;
        }
    }

    return array;
};

console.log(moveZeroes([0, 0, 1]));