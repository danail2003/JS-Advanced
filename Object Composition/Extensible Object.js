function solve() {
    let object = {
        extend: function (otherObj) {
            for (let i of Object.keys(otherObj)) {
                if (typeof otherObj[i] == 'function') {
                    Object.getPrototypeOf(object)[i] = otherObj[i];
                }
                else {
                    object[i] = otherObj[i];
                }
            }
        },
    };

    return object;
}