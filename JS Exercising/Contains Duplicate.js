const containsDuplicate = (array) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        for (let j = i + 1; j < array.length; j++) {
            const nextElement = array[j];

            if (element === nextElement) {
                return true;
            }
        }
    }

    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));