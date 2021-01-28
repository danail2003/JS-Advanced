function deleteByEmail() {
    const rows = document.querySelectorAll("td");
    let result = document.getElementById("result");
    let input = document.getElementsByName("email")[0].value;

    let isFound = false;

    for (const row of rows) {
        if (row.innerHTML === input) {
            isFound = true;
            row.parentNode.parentNode.removeChild(row.parentNode);
        }
    }

    if (isFound) {
        result.textContent = "Deleted.";
    }
    else {
        result.textContent = "Not found.";
    }

    input = "";
}