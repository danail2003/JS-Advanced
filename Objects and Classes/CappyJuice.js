function produceBottles(array) {
    let map = new Map();
    let juice = {};

    for (let i = 0; i < array.length; i++) {
        let line = array[i].split("=>");

        if (!juice.hasOwnProperty(line[0])) {
            juice[line[0]] = 0;
        }

        juice[line[0]] += Number(line[1]);

        if (juice[line[0]] >= 1000) {
            let bottles = Math.floor(juice[line[0]] / 1000);

            if (map.get(line[0])) {
                map.set(line[0], bottles + map.get(line[0]));
            }
            else {
                map.set(line[0], bottles);
            }
        }

        juice[line[0]] = juice[line[0]] % 1000;
    }

    console.log([...map].map(x => `${x[0]}=> ${x[1]}`).join("\n"));
}

produceBottles(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);