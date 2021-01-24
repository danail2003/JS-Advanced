function turnJSONToHTML(array) {
    let html = "<table>\n";
    html += "  <tr>";
    let json = JSON.parse(array);

    for (let line in json[0]) {
        if (json[0].hasOwnProperty(line)) {
            html += `<th>${line}</th>`;
        }
    }

    html += "</tr>\n";

    for (let i = 0; i < json.length; i++) {
        html += "  <tr>";

        for (let value in json[i]) {
            let cell = String(json[i][value]).replace(/&/gim, '&amp;')
            .replace(/</gim, '&lt;')
            .replace(/>/gim, '&gt;')
            .replace(/"/gim, '&quot;')
            .replace(/'/gim, '&#39;');

            html += `<td>${cell}</td>`;
        }

        html += "</tr>\n";
    }

    html += "</table>";

    console.log(html);
}

turnJSONToHTML(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);