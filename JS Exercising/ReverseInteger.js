const reverse = (number) => {
    let stringifyNumber = String(number);
    let reversed = '';

    for (let i = stringifyNumber.length - 1; i >= 0; i--) {
        const element = stringifyNumber[i];
        reversed += element;
    }

    reversed = parseInt(reversed);

    if (reversed > 2147483647 || reversed < -2147483648) {
        return 0;
    }

    if (number < 0) {
        reversed *= -1;
    }

    return reversed;
};

console.log(reverse(1534236469));