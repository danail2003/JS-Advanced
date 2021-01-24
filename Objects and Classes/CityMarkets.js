function townSales(input) {
    let towns = new Map();

    for (let i = 0; i < input.length; i++) {
        let array = input[i].split(" -> ");
        let amountAndPrice = array[2].split(" : ");
        let amount = Number(amountAndPrice[0]);
        let price = Number(amountAndPrice[1])
        let totalIncome = amount * price;

        if (!towns.get(array[0])) {
            towns.set(array[0], new Map());
        }

        towns.get(array[0]).set(array[1], totalIncome);
    }

    for (let [town, product] of towns) {
        console.log(`Town - ${town}`);

        for (let [product, income] of towns.get(town)) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}

townSales(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']);