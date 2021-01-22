function doubleAndReverseOdds(array) {
    const oddArray = array.filter((x, i) => i % 2 != 0).map(x => x * 2).reverse();

    console.log(oddArray.join(' '));
}

doubleAndReverseOdds([10, 15, 20, 25]);