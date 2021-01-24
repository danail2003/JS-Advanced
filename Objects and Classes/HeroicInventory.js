function createRegister(array) {
    let heroes = new Array();

    for (let i = 0; i < array.length; i++) {
        const line = array[i].split(" / ");

        let items = new Array();

        if (line.length > 2) {
            items = line[2].split(", ");
        }

        let level = Number(line[1]);
        let hero = { name: line[0], level: level, items: items };

        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}

createRegister(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);