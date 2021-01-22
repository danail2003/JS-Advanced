function sumLastTwoElements(n, k) {
    const array = [1];

    for (let i = 0; i < n; i++) {
        const currentElement = array.slice(k * -1).reduce((a, b) => a + b);

        array[i] = currentElement;
    }

    console.log(array.join(' '));
}

sumLastTwoElements(6, 3);