function solution(array) {
    let processor = (function () {
        let list = [];

        return {
            add: x => list.push(x),
            remove: x => list = list.filter(y => y !== x),
            print: () => console.log(list)
        }
    })();

    for (let command of array) {
        [cmd, text] = command.split(' ');
        processor[cmd](text);
    }
}

solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solution(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);