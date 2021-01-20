function solve(firstNum, secondNum) {
    let greatest = 0;
    let smallestNum = Math.min(firstNum, secondNum);

    for (let i = 1; i <= smallestNum; i++) {
        if (firstNum % i == 0 && secondNum % i == 0) {
            greatest = i;
        }
    }

    console.log(greatest);
}

solve(2154, 458);