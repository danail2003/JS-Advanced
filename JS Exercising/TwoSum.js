const twoSum = (array, target) => {
    let newArray = [];

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                newArray.push(i);
                newArray.push(j);
            }
        }
    }

    return newArray;
};

console.log(twoSum([3, 2, 3], 6))