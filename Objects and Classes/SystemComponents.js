function orderRegister(array) {
    let register = new Map();

    for (let i = 0; i < array.length; i++) {
        let token = array[i].split(" | ");

        if (!register.get(token[0])) {
            register.set(token[0], new Map());
        }

        if (!register.get(token[0]).get(token[1])) {
            register.get(token[0]).set(token[1], new Array());
        }

        register.get(token[0]).get(token[1]).push(token[2]);
    }

    console.log([...register].sort((x, y) => y[1].size - x[1].size || x[0].localeCompare(y[0])).map(x => `${x[0]}\n${[...x[1]].sort((x, y) => y[1].length - x[1].length)
        .map(x => `|||${x[0]}\n${[...x[1]].map(x => `||||||${x}`).join("\n")}`).join("\n")}`).join("\n"));
}

orderRegister(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);