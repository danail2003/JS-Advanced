const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            break;
        }
        else {
            if (i === 0) {
                digits[i] = 0;
                digits.unshift(1)
                break;
            }

            digits[i] = 0;
        }
    }
   
    return digits;
};

console.log(plusOne([8, 9, 8, 9]));