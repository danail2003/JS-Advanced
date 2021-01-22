function solve(array) {
    let delimeter = array[array.length - 1];
    let newArray = array.slice(0, array.length - 1);

    console.log(newArray.join(delimeter));
}

solve(['One', 'Two', 'Three', 'Four', 'Five', '-']);