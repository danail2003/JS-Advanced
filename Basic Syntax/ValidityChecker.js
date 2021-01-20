function solve(array) {
    const x1 = Number(array[0]);
    const y1 = Number(array[1]);
    const x2 = Number(array[2]);
    const y2 = Number(array[3]);

    const firstDistance = Math.sqrt(x1 * x1 + y1 * y1);
    const secondDistance = Math.sqrt(x2 * x2 + y2 * y2);
    const thirdDistance = Math.sqrt(Math.abs(x1 - x2) * Math.abs(x1 - x2) + Math.abs(y1 - y2) * Math.abs(y1 - y2));

    if (Number.isInteger(firstDistance)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(secondDistance)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(thirdDistance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);