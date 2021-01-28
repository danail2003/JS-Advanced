function addItem() {
    const items = document.getElementById("items");
    const text = document.getElementById("newText");
    const list = document.createElement("li");
    list.innerText = text.value;
    let anchor = document.createElement("a");
    anchor.innerHTML = "[Delete]";
    anchor.href = "#";

    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        items.removeChild(list);
    })

    list.appendChild(anchor);
    items.appendChild(list);
    text.value = "";
}