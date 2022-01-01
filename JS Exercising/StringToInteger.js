const myAtoi = (string) => {
    string = string.trim();

    let sign = 1;
    let i = 0;

    if (string.length > 0) {
        if (string[i] === '-') {
            i++;
            sign = -1;
        }
        else if (string[i] === '+') {
            i++;
        }
    }

    let result = '';

    const numbers = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);

    while (numbers.has(string[i])) {
        result += string[i];
        i++;
    }

    result = Number(result) * sign;

    const min = Math.pow(2, 31) * -1;
    const max = Math.pow(2, 31) - 1;

    if (result < min) {
        result = min;
    }
    else if (result > max) {
        result = max;
    }

    return result;
};

console.log(myAtoi("042"));