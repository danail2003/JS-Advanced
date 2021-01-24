function createRegister(array) {
    let register = new Map();

    for (let i = 0; i < array.length; i++) {
        let token = array[i].split(" | ");

        if (!register.get(token[0])) {
            register.set(token[0], new Map());
            register.get(token[0]).set(token[1], Number(token[2]));
        }
        else {
            if (register.get(token[0]).get(token[1])) {
                register.get(token[0]).set(token[1], register.get(token[0]).get(token[1]) + Number(token[2]));
            }
            else {
                register.get(token[0]).set(token[1], Number(token[2]));
            }
        }
    }

    console.log([...register].map(x => `${x[0]}\n${[...x[1]]
        .map(y => `###${y[0]} -> ${y[1]}`).join("\n")}`).join("\n"));
}

createRegister(['Audi | Q7 | 1000',
    'Audi | Q7 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);