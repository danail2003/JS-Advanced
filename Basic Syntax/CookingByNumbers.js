function solve(array) {
    let number = Number(array[0]);

    for (let i = 1; i < array.length; i++) {
        if (array[i] == 'chop') {
            number /= 2;
        }
        else if (array[i] == 'dice') {
            number = Math.sqrt(number);
        }
        else if (array[i] == 'spice') {
            number += 1;
        }
        else if (array[i] == 'bake') {
            number *= 3;
        }
        else if (array[i] == 'fillet') {
            number -= (number * 0.2);
        }

        console.log(number);
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);