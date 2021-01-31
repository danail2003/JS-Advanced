(() => {
    let add = (a, b) => [a[0] + b[0], a[1] + b[1]];
    let multiply = (a, b) => [a[0] * b, a[1] * b];
    let length = (a) => Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
    let dot = (a, b) => a[0] * b[0] + a[1] * b[1];
    let cross = (a, b) => a[0] * b[1] - a[1] * b[0];

    return { add, multiply, length, dot, cross };
})();