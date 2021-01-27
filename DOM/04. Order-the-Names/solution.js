function solve() {
    let list = document.querySelectorAll("li");
    let button = document.querySelector("button");

    button.addEventListener("click", function (e) {
        e.preventDefault();

        let value = document.querySelector("input").value;
        let firstLetter = value[0].toUpperCase();
        let index = Number(firstLetter.charCodeAt()) - 65;
        let oldValue = list[index].innerHTML;

        let name = firstLetter + value.substring(1).toLowerCase();

        if (oldValue === "") {
            list[index].innerHTML = name;
        }
        else {
            list[index].innerHTML += `, ${name}`;
        }
    })
}