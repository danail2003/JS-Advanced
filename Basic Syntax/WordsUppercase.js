function solve(text) {
    let matches = text.toUpperCase().split(/\W+/).filter(x => x != '');

    console.log(matches.join(', '));
}

solve('Hi, how are you?'); 