function solve(array) {
    console.log(array.filter((v, i) => v >= Math.max(null, ...array.slice(0, i))).join("\n"));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);