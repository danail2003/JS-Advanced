function addItem() {
    const text = document.getElementById("newItemText");
    const value = document.getElementById("newItemValue");

    const option = document.createElement("option");
    option.value = value.value;
    option.textContent = text.value;

    const select = document.getElementById("menu");
    select.appendChild(option);

    text.value = '';
    value.value = '';
}