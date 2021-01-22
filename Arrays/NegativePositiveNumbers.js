function sortNegativeAndPositiveNumbers(array) {
    let sortedNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            sortedNumbers.push(array[i]);
        }
        else {
            sortedNumbers.unshift(array[i]);
        }
    }

    sortedNumbers.forEach(x => console.log(x));
}

sortNegativeAndPositiveNumbers([7, -2, 8, 9]);