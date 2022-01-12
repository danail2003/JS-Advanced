const maxProfit = (stocks) => {
    let profit = 0;

    for (let i = 0; i < stocks.length; i++) {
        if (stocks[i] < stocks[i + 1]) {
            profit += stocks[i + 1] - stocks[i];
        }
    }

    return profit;
};

console.log(maxProfit([1, 2, 3, 4, 5]));