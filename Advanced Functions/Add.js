function solution(num1) {
    return function (num2) {
        return num1 + num2;
    }
}

let result = solution(5);
console.log(result(2));