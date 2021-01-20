function solve(array) {
    let sumOfElements = 0;
    let sumOfInverseValues = 0;
    let concatNums = '';

    for (let i = 0; i < array.length; i++) {
        sumOfElements += array[i];
        sumOfInverseValues += (1 / array[i]);
        concatNums += String(array[i]);
    }

    console.log(sumOfElements);
    console.log(sumOfInverseValues);
    console.log(concatNums);
}

solve([1, 2, 3]); 