const firstUniqChar = (text) => {
    let counter = 0;

    for (let i = 0; i < text.length; i++) {
        const firstElement = text[i];

        for (let j = 0; j < text.length; j++) {
            const secondElement = text[j];

            if (firstElement === secondElement && i !== j) {
                counter++;
                break;
            }
        }

        if (counter === 0) {
            return i;
        }

        counter = 0;
    }

    return -1;
};

console.log(firstUniqChar('leetcode'));