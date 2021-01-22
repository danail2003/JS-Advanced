function solve(array) {
    console.log(array.sort((x, y) => x.length - y.length || x.toLowerCase().localeCompare(y.toLowerCase())).join("\n"));
}

solve(['alpha', 'beta', 'gamma']);