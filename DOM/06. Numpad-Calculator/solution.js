function solve() {
    const expressionOutput = document.getElementById("expressionOutput");
    const resultOutput = document.getElementById("resultOutput");
    const operators = ["-", "+", "/", "*"];

    Array.from(document.querySelectorAll("button")).map(x => x.addEventListener("click", function (e) {
        e.preventDefault();

        let value = e.target.value;

        if (value === "=") {
            let result = calculate();

            if (result === undefined || result === Infinity) {
                resultOutput.innerHTML = "NaN";
            }
            else {
                resultOutput.innerHTML = result;
            }
        }
        else if (value === "Clear") {
            expressionOutput.innerHTML = "";
            resultOutput.innerHTML = "";
        }
        else {
            if (operators.includes(value)) {
                expressionOutput.innerHTML += ` ${value} `;
            }
            else {
                expressionOutput.innerHTML += value;
            }
        }
    }));

    function calculate() {
        let expression = expressionOutput.innerHTML.split(" ").filter(x => x !== "");

        if (operators.includes(expression[expression.length - 1])) {
            return undefined;
        }
        else {
            let sum = Number(expression[0]);

            for (let i = 1; i < expression.length - 1; i++) {
                let operator = expression[i];
                let number = Number(expression[i + 1]);

                if (operator == "+") {
                    sum += number
                }
                else if (operator == "-") {
                    sum -= number;
                }
                else if (operator == "/") {
                    sum /= number;
                }
                else if (operator == "*") {
                    sum *= number;
                }
            }

            return sum;
        }
    }
}