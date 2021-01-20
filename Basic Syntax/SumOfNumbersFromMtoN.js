function solve(firstNumber, secondNumber) {
    let result = 0;
    let firstNum = Number(firstNumber);
    let secondNum = Number(secondNumber);

    for (let i = firstNum; i <= secondNum; i++) {
        result += i;
    }

    console.log(result);
}

solve('1', '5');