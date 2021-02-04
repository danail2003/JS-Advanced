function solve() {
    const addBtn = document.getElementById('add');
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const dueDate = document.getElementById('date');

    addBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (!task.value || !description.value || !dueDate.value) {
            return;
        }

        const openDiv = document.getElementsByTagName('section')[1].children[1];

        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const descriptionParagraph = document.createElement('p');
        const dateParagraph = document.createElement('p');
        const div = document.createElement('div');
        const startBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        h3.textContent = task.value;
        descriptionParagraph.textContent = `Description: ${description.value}`;
        dateParagraph.textContent = `Due Date: ${dueDate.value}`;
        div.classList.add('flex');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start';
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Delete';

        div.appendChild(startBtn);
        div.appendChild(deleteBtn);
        article.appendChild(h3);
        article.appendChild(descriptionParagraph);
        article.appendChild(dateParagraph);
        article.appendChild(div);
        openDiv.appendChild(article);

        startBtn.addEventListener('click', function () {
            openDiv.removeChild(article);

            const inProgressDiv = document.getElementsByTagName('section')[2].children[1];
            div.removeChild(startBtn);

            const finishBtn = document.createElement('button');

            finishBtn.classList.add('orange');
            finishBtn.textContent = 'Finish';
            div.appendChild(finishBtn);

            inProgressDiv.appendChild(article);

            finishBtn.addEventListener('click', function () {
                const finishDiv = document.getElementsByTagName('section')[3].children[1];

                div.removeChild(deleteBtn);
                div.removeChild(finishBtn);

                finishDiv.appendChild(article);
            });
        });

        deleteBtn.addEventListener('click', function () {
            article.remove();
        });
    });
}