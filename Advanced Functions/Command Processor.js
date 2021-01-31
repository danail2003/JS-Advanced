function solution() {
    let string = '';

    return {
        append: (x) => string += x,
        removeStart: (x) => string = string.substring(x),
        removeEnd: (x) => string = string.substring(0, string.length - x),
        print: () => console.log(string)
    };
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
