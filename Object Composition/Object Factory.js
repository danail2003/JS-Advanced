function solution(input) {
    let object = {};
    JSON.parse(input).forEach(x => Object.assign(object, x));
    return object;
}

console.log(solution(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`));
console.log(solution(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`));