function solve() {
    let types = {};
    let array = [];

    for (let i = 0; i < arguments.length; i++) {
        let type = typeof (arguments[i]);

        array.push({ type: type, value: arguments[i] });

        if (!types.hasOwnProperty(type)) {
            types[type] = 0;
        }

        types[type]++;
    }

    array.forEach(x => console.log(`${x.type}: ${x.value}`));
    let sortedValues = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (let key in sortedValues) {
        console.log(`${sortedValues[key][0]} = ${sortedValues[key][1]}`);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });