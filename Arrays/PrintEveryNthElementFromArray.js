function printEveryNthElement(array) {
    let element = Number(array[array.length - 1]);
    let newArray = array.slice(0, array.length - 1);

    for (let i = 0; i < newArray.length; i += element) {
        console.log(array[i]);
    }
}

printEveryNthElement(['5', '20', '31', '4', '20', '2']);