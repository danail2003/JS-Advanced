function solve(array) {
    let diff = 0;

    if (array[1] == 'city' && Number(array[0]) > 50) {
        diff = Number(array[0]) - 50;

        if (diff <= 20) {
            console.log('speeding');
        }
        else if (diff <= 40) {
            console.log('excessive speeding');
        }
        else {
            console.log('reckless driving');
        }
    }
    else if (array[1] == 'motorway' && Number(array[0]) > 130) {
        diff = Number(array[0]) - 130;

        if (diff <= 20 && diff > 0) {
            console.log('speeding');
        }
        else if (diff <= 40) {
            console.log('excessive speeding');
        }
        else {
            console.log('reckless driving');
        }
    }
    else if (array[1] == 'interstate' && Number(array[0]) > 90) {
        diff = Number(array[0]) - 90;

        if (diff <= 20 && diff > 0) {
            console.log('speeding');
        }
        else if (diff <= 40) {
            console.log('excessive speeding');
        }
        else {
            console.log('reckless driving');
        }
    }
    else if (array[1] == 'residential' && Number(array[0]) > 20) {
        diff = Number(array[0]) - 20;

        if (diff <= 20 && diff > 0) {
            console.log('speeding');
        }
        else if (diff <= 40) {
            console.log('excessive speeding');
        }
        else {
            console.log('reckless driving');
        }
    }
}

solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);