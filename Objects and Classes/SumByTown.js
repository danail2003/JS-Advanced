function calcTotalIncome(array) {
    let townsObj = {};

    for (let i = 0; i < array.length; i += 2) {
        let town = "";
        let income = Number(array[i + 1]);

        town = array[i];

        if (townsObj.hasOwnProperty(town)) {
            townsObj[town] += income;
        }
        else {
            townsObj[town] = income;
        }
    }

    console.log(JSON.stringify(townsObj));
}

calcTotalIncome(['Sofia','20','Varna','3','sofia','5','varna','4']);