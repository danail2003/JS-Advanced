function solve() {
    const addBtn = document.getElementsByTagName('button')[0];
    const clearBtn = document.getElementById('archive').children[2];

    addBtn.addEventListener('click', function (e) {
        e.preventDefault();

        let name = document.getElementById('container').children[0].value;
        let hall = document.getElementById('container').children[1].value;
        let price = document.getElementById('container').children[2].value;

        if (!name || !hall || !price || !Number(price)) {
            return;
        }

        const ul = document.getElementsByTagName('ul')[0];
        const li = document.createElement('li');
        const span = document.createElement('span');
        const strong = document.createElement('strong');
        const div = document.createElement('div');
        const priceStrong = document.createElement('strong');
        const input = document.createElement('input');
        const archiveBtn = document.createElement('button');

        span.textContent = name;
        strong.textContent = `Hall: ${hall}`;
        priceStrong.textContent = Number(price).toFixed(2);
        input.setAttribute('placeholder', 'Tickets Sold');
        archiveBtn.textContent = 'Archive';

        div.appendChild(priceStrong);
        div.appendChild(input);
        div.appendChild(archiveBtn);
        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);

        ul.appendChild(li);

        document.getElementById('container').children[0].value = '';
        document.getElementById('container').children[1].value = '';
        document.getElementById('container').children[2].value = '';

        archiveBtn.addEventListener('click', function () {
            if (!input.value || !Number(input.value)) {
                return;
            }

            const archive = document.getElementsByTagName('ul')[1];

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            strong.textContent = `Total amount: ${(Number(input.value) * Number(price)).toFixed(2)}`;
            li.removeChild(div);
            li.appendChild(deleteBtn);
            archive.appendChild(li);

            deleteBtn.addEventListener('click', function () {
                archive.removeChild(li);
            });
        });

        clearBtn.addEventListener('click', function () {
            const archive = document.getElementsByTagName('ul')[1];

            archive.innerHTML = '';
        });
    });
}