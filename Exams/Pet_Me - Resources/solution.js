function solve() {
    const addBtn = document.getElementsByTagName('button')[0];
    const adoption = document.getElementById('adoption').children[1];
    const adopted = document.getElementById('adopted').children[1];
    const name = document.getElementsByTagName('input')[0];
    const age = document.getElementsByTagName('input')[1];
    const kind = document.getElementsByTagName('input')[2];
    const owner = document.getElementsByTagName('input')[3];

    addBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (!name.value || !age.value || !kind.value || !owner.value || !Number(age.value)) {
            return;
        }

        const li = document.createElement('li');
        const paragraph = document.createElement('p');
        const span = document.createElement('span');
        const contactBtn = document.createElement('button');

        paragraph.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;
        span.textContent = `Owner: ${owner.value}`;
        contactBtn.textContent = 'Contact with owner';

        li.appendChild(paragraph);
        li.appendChild(span);
        li.appendChild(contactBtn);
        adoption.appendChild(li);

        name.value = '';
        age.value = '';
        kind.value = '';
        owner.value = '';

        contactBtn.addEventListener('click', function () {
            const div = document.createElement('div');
            const input = document.createElement('input');
            const yesBtn = document.createElement('button');

            li.removeChild(contactBtn);
            input.placeholder = 'Enter your names';
            yesBtn.textContent = 'Yes! I take it!';

            div.appendChild(input);
            div.appendChild(yesBtn);
            li.appendChild(div);

            yesBtn.addEventListener('click', function () {
                if (!input.value) {
                    return;
                }

                adoption.removeChild(li);
                span.textContent = `New Owner: ${input.value}`;
                li.removeChild(div);

                const checkBtn = document.createElement('button');

                checkBtn.textContent = 'Checked';
                li.appendChild(checkBtn);
                adopted.appendChild(li);

                checkBtn.addEventListener('click', function () {
                    adopted.removeChild(li);
                });
            });
        });
    });
}