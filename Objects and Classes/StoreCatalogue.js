function solve(array) {
    let catalogue = new Map();

    for (let i = 0; i < array.length; i++) {
        let line = array[i].split(" : ");

        let symbol = line[0].substring(0, 1);
        if (!catalogue.get(symbol)) {
            catalogue.set(symbol, new Map());
        }

        catalogue.get(symbol).set(line[0], Number(line[1]));
    }

    console.log([...catalogue].sort().map(x => `${x[0]}\n  ${[...x[1]]
        .sort().map(y => `${y[0]}: ${y[1]}`).join("\n  ")}`).join("\n"));
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);