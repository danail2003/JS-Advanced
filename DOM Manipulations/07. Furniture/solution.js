function solve() {
  const generateButton = document.getElementsByTagName('button')[0];
  const buyButton = document.getElementsByTagName('button')[1];
  let body = document.getElementsByTagName('tbody')[0];

  generateButton.addEventListener('click', function (e) {
    e.preventDefault();

    let productInfo = document.getElementsByTagName('textarea')[0].value;
    let json = JSON.parse(productInfo);

    for (const obj of json) {
      let row = document.createElement('tr');
      let td = document.createElement('td');
      let image = document.createElement('img');
      image.src = obj.img;

      let td2 = document.createElement('td');
      td2.textContent = obj.name;

      let td3 = document.createElement('td');
      td3.textContent = obj.price;

      let td4 = document.createElement('td');
      td4.textContent = obj.decFactor;

      let td5 = document.createElement('td');
      let input = document.createElement('input');
      input.type = 'checkbox';
      td5.appendChild(input);

      td.appendChild(image);
      row.appendChild(td);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      row.appendChild(td5);

      body.appendChild(row);
    }
  });

  buyButton.addEventListener('click', function (e) {
    e.preventDefault();

    let inputs = document.getElementsByTagName('input');
    let areaOutput = document.getElementsByTagName('textarea')[1];
    let checked = [];

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === true) {
        checked.push(body.children[i]);
      }
    }

    let names = [];
    let totalPrice = 0;
    let decFactor = [];

    for (let obj of checked) {
      names.push(obj.children[1].textContent);
      totalPrice += Number(obj.children[2].textContent);
      decFactor.push(Number(obj.children[3].textContent));
    }

    areaOutput.value += `Bought furniture: ${names.join(', ')}\n`;
    areaOutput.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    areaOutput.value += `Average decoration factor: ${decFactor.reduce((a, b) => a + b, 0) / decFactor.length}`;
  });
}