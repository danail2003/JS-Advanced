const intersect = (firstArray, secondArray) => {
    let intersectArray = [];

    for (let i = 0; i < firstArray.length; i++) {

        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] == secondArray[j]) {
                intersectArray.push(firstArray[i]);
                secondArray.splice(j, 1);
                break;
            }
        }
    }

    return intersectArray;
};

console.log(intersect([1, 2, 2, 1], [2]));