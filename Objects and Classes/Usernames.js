function createCatalogue(array) {
    let set = new Set();

    for (let i = 0; i < array.length; i++) {
        set.add(array[i]);
    }

    console.log([...set].sort((x, y) => x.length - y.length || x.localeCompare(y)).join("\n"));
}

createCatalogue(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);