function solve() {
    const outputs = document.getElementById('outputs');
    const addBtn = document.getElementsByTagName('button')[0];
    const profit = document.getElementsByTagName('h1')[1];
    let total = 0;

    addBtn.addEventListener('click', function (e) {
        e.preventDefault();

        let title = document.getElementsByTagName('input')[0].value;
        let year = document.getElementsByTagName('input')[1].value;
        let price = document.getElementsByTagName('input')[2].value;

        if (title !== undefined && Number(year) > 0 && Number(price) > 0) {
            const div = document.createElement('div');
            const paragraph = document.createElement('p');
            const buyBtn = document.createElement('button');
            const moveBtn = document.createElement('button');

            div.classList.add('book');
            paragraph.textContent = `${title} [${year}]`;

            if (year >= 2000) {
                buyBtn.textContent = `Buy it only for ${Number(price).toFixed(2)} BGN`;
                moveBtn.textContent = 'Move to old section';

                div.appendChild(paragraph);
                div.appendChild(buyBtn);
                div.appendChild(moveBtn);
                outputs.children[1].appendChild(div);

                moveBtn.addEventListener('click', function () {
                    div.removeChild(moveBtn);
                    buyBtn.textContent = `Buy it only for ${(Number(price) * 0.85).toFixed(2)} BGN`;
                    outputs.children[1].removeChild(div);
                    outputs.children[0].appendChild(div);
                });

                buyBtn.addEventListener('click', function (e) {

                    total += Number(price);

                    profit.textContent = `Total Store Profit: ${total.toFixed(2)} BGN`;
                    let target = e.target.parentNode;
                    target.remove();
                });
            }
            else {
                let newPrice = price * 0.85;
                buyBtn.textContent = `Buy it only for ${newPrice.toFixed(2)} BGN`;
                div.appendChild(paragraph);
                div.appendChild(buyBtn);
                outputs.children[0].appendChild(div);

                buyBtn.addEventListener('click', function (e) {

                    total += (Number(price) * 0.85);

                    profit.textContent = `Total Store Profit: ${total.toFixed(2)} BGN`;
                    let target = e.target.parentNode;
                    target.remove();
                });
            }
        }

        let form = document.querySelector('form');
        form.children[1].value = '';
        form.children[3].value = '';
        form.children[5].value = '';
    });
}