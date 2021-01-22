function findSmallestTwoNumbers(array) {
    array = array.sort((a, b) => a - b).slice(0, 2).join(' ');

    console.log(array);
}

findSmallestTwoNumbers([30, 15, 50, 5]);