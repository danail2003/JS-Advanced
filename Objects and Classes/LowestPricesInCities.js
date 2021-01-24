function printLowestPrice(array) {
    let citiesMap = new Map();

    for (let i = 0; i < array.length; i++) {
        let line = array[i].split(" | ").map(x => x.trim()).filter(x => x != "");

        if (!citiesMap.has(line[1])) {
            citiesMap.set(line[1], new Map());
        }

        citiesMap.get(line[1]).set(line[0], Number(line[2]));
    }

    for (let [product, map] of citiesMap) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let cheapestCity = "";

        for (let [town, price] of map) {
            if (price < lowestPrice) {
                lowestPrice = price;
                cheapestCity = town;
            }
        }


        console.log(`${product} -> ${lowestPrice} (${cheapestCity})`);
    }
}

printLowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);