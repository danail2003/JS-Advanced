function solve() {
    const button = document.querySelector("button");
    const select = document.getElementById("selectMenuTo");
    const input = document.getElementById("input");
    const output = document.getElementById("result");

    const binary = document.createElement("option");
    binary.innerHTML = "Binary";
    binary.value = "binary";

    const hexadecimal = document.createElement("option");
    hexadecimal.innerHTML = "Hexadecimal";
    hexadecimal.value = "hexadecimal";

    select.appendChild(binary);
    select.appendChild(hexadecimal);

    button.addEventListener("click", function (e) {
        e.preventDefault();

        if (select.value == "binary") {
            output.value = Number(input.value).toString(2);
        }
        else if (select.value == "hexadecimal") {
            output.value = Number(input.value).toString(16).toUpperCase();
        }
    })
}