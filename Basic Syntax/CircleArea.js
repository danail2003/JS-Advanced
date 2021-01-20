function solve(argument) {
    let result;

    let type = typeof (argument);

    if (type === 'number') {
        result = Math.PI * Math.pow(argument, 2);

        console.log(result.toFixed(2));
    }
    else {
        console.log('We can not calculate the circle area, because we receive a ' + type + '.');
    }
}

solve(5);