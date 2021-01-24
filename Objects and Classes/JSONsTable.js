function turnJSONIntoHTML(array) {
    let escape = x => x.replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');


    let html = '<table>\n';

    for (const line of array) {
        let json = JSON.parse(line);

        html += "\t<tr>\n";
        html += `\t\t<td>${escape(json.name)}</td>\n`;
        html += `\t\t<td>${escape(json.position)}</td>\n`;
        html += `\t\t<td>${json.salary}</td>\n`;
        html += "\t</tr>\n";
    }

    html += "</table>";

    console.log(html);
}

turnJSONIntoHTML(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);