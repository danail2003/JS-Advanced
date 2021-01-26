function solution(object) {
    let car;
    let allWheels = [0, 0, 0, 0];
    let volume = 0;
    let power = 0;

    if (object.wheelsize % 2 === 0) {
        object.wheelsize = object.wheelsize - 1;
        allWheels = allWheels.fill(object.wheelsize);
    }
    else {
        allWheels = allWheels.fill(object.wheelsize);
    }

    if (object.power <= 90) {
        volume = 1800;
        power = 90;
    }
    else if (object.power <= 120) {
        volume = 2400;
        power = 120;
    }
    else if (object.power <= 200) {
        volume = 3500;
        power = 200;
    }

    car = {
        model: object.model,
        engine: {
            power: power,
            volume: volume
        },
        carriage: {
            type: object.carriage,
            color: object.color
        },
        wheels: allWheels
    };

    return car;
}

console.log(solution({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(solution({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));