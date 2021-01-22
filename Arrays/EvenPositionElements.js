function findsEvenPositions(array) {
    const evenElements = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            evenElements.push(array[i]);
        }
    }

    console.log(evenElements.join(' '));
}

findsEvenPositions(['20', '30', '40']);