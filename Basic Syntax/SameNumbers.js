function solve(numbers) {
    let sum = 0;
    let isAllEqual = true;
    let numbersLength = String(numbers);
    let lastNum = Number(numbersLength[numbersLength.length - 1]);

    for (let i = 0; i < numbersLength.length - 1; i++) {

        sum += Number(numbersLength[i]);

        if (numbersLength[i] != numbersLength[i + 1]) {
            isAllEqual = false;
        }
    }

    sum += lastNum;

    console.log(isAllEqual);
    console.log(sum);
}

solve(1234);