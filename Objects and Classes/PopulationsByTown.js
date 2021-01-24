function addPopulationByTown(array) {
    let towns = {};

    for (let i = 0; i < array.length; i++) {
        let line = array[i].split(" <-> ");

        let town = line[0];
        let population = Number(line[1]);

        if (towns.hasOwnProperty(town)) {
            towns[town] += population;
        }
        else {
            towns[town] = population;
        }
    }

    for (const key in towns) {
        let element = towns[key];
        console.log(`${key} : ${element}`);
    }
}

addPopulationByTown(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);