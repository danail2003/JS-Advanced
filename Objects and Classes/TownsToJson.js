function convertInputToJson(array) {
    let newArray = new Array();

    for (let i = 1; i < array.length; i++) {
        let elements = array[i].split("|").map(x => x.trim()).filter(x => x != "");

        let obj = {
            Town: elements[0],
            Latitude: Number(elements[1]) == 0 ? 0 : Number(Number(elements[1]).toFixed(2)),
            Longitude: Number(elements[2]) == 0 ? 0 : Number(Number(elements[2]).toFixed(2))
        };

        newArray.push(obj);
    }

    console.log(JSON.stringify(newArray));
}

convertInputToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);