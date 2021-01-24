function countWords([array]) {
    let words = {};
    let line = array.split(/\W+/).filter(x => x != "");

    for (let word of line) {
        if (!words.hasOwnProperty(word)) {
            words[word] = 0;
        }

        words[word]++;
    }

    console.log(JSON.stringify(words));
}

countWords(['Far too slow, you\'re far too slow.']);