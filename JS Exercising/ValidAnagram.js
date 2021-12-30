const isAnagram = (firstString, secondString) => {
    let counter = 0;

    if (firstString.length !== secondString.length) {
        return false;
    }

    for (let i = 0; i < firstString.length; i++) {
        const element = firstString[i];

        for (let j = 0; j < secondString.length; j++) {
            if (element === secondString[j]) {
                firstString = firstString.slice(i + 1);
                secondString=secondString.replace(secondString[j], "");
                i--;
                counter++;
                break;
            }
        }

        if (counter === 0) {
            return false;
        }

        counter = 0;
    }

    return true;
};

console.log(isAnagram("aacc", "ccac"));