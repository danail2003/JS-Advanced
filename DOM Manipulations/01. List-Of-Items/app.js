function addItem() {
    const items = document.getElementById("items");
    const text = document.getElementById("newItemText");
    const list = document.createElement("li");
    list.innerText = text.value;
    items.appendChild(list);
    text.value = "";
}