function solve(array) {
    let rotates = Number(array[array.length - 1]);

    array = array.slice(0, array.length - 1);

    for (let i = 0; i < rotates % array.length; i++) {
        let element = array.pop();
        array.unshift(element);
    }

    console.log(array.join(' '));
}

solve(['1', '2', '3', '4', '2']);