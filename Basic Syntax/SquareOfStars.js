function solve(number) {
    for (let i = 0; i < number; i++) {
        let result = '';

        for (let j = 0; j < number; j++) {
            result += '* ';
        }

        console.log(result);
    }
}

solve(); 