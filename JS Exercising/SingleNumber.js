const singleNumber = (array) => {
    array.sort();

    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            i++;
        }
        else {
            return array[i];
        }
    }
};

console.log(singleNumber([4,1,2,1,2]));