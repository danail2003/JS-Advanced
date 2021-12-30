function removeDuplicates(array) {
    if (array.length <= 1) {
        return 1;
    }
    
    for (let index = 0; index < array.length - 1; index++) {
        if (array[index] === array[index + 1]) {
            array.splice(index, 1);
            index--;
        }
    }

    return array.length;
};

console.log(removeDuplicates([1, 1, 2]));