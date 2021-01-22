function solve(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'add') {
            newArray.push(i + 1);
        }
        else if (array[i] == 'remove') {
            newArray.pop();
        }
    }

    if (newArray.length > 0) {
        newArray.forEach(x => console.log(x));
    }
    else {
        console.log('Empty');
    }
}

solve([['remove', 'remove', 'remove']]);