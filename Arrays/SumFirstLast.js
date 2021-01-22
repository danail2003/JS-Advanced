function sumFirstAndLastElement(array) {
    const sum = Number(array[0]) + Number(array[array.length - 1]);

    console.log(sum);
}

sumFirstAndLastElement(['20', '30', '40']);