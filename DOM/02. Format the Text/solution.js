function solve() {
  const content = document.getElementById('input').textContent;
  const output = document.getElementById('output');
  const array = content.split('.');
  let text = [];

  if (array.length < 3) {
    const paragraph = document.createElement('p');
    let description = document.createTextNode(array.join('.'));
    paragraph.appendChild(description);
    output.appendChild(paragraph);
  }

  for (let i = 0; i < array.length; i++) {
    if (i % 3 === 0) {
      let paragraph = document.createElement('p');
      let description = document.createTextNode(text.join("."));
      paragraph.appendChild(description);
      output.appendChild(paragraph);
      text = [];
    }

    text.push(array[i]);
  }

  if (text.length > 0) {
    let paragraph = document.createElement('p');
    let description = document.createTextNode(text.join("."));
    paragraph.appendChild(description);
    output.appendChild(paragraph);
  }
}