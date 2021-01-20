function solve(firstWord, secondWord, thirdWord) {
    let sumLength = firstWord.length + secondWord.length + thirdWord.length;

    let averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');