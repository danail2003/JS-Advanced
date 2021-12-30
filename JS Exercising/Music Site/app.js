window.addEventListener('load', solve);

function solve() {
    const container = document.querySelector('.all-hits-container');
    const savedContainer = document.querySelector('.saved-container');
    const genre = document.querySelector('#genre');
    const name = document.querySelector('#name');
    const author = document.querySelector('#author');
    const date = document.querySelector('#date');
    const addBtn = document.querySelector('#add-btn');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!genre.value || !name.value || !author.value || !date.value) {
            return;
        }

        const collectionDiv = document.createElement('div');
        collectionDiv.classList.add('hits-info');

        const image = document.createElement('img');
        image.setAttribute('src', './static/img/img.png');

        const collectionGenre = document.createElement('h2');

        const collectionName = document.createElement('h2');

        const collectionAuthor = document.createElement('h2');

        const collectionDate = document.createElement('h3');

        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';

        const likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        collectionGenre.textContent = `Genre: ${genre.value}`;
        collectionName.textContent = `Name: ${name.value}`;
        collectionAuthor.textContent = `Author: ${author.value}`;
        collectionDate.textContent = `Date: ${date.value}`;

        collectionDiv.appendChild(image);
        collectionDiv.appendChild(collectionGenre);
        collectionDiv.appendChild(collectionName);
        collectionDiv.appendChild(collectionAuthor);
        collectionDiv.appendChild(collectionDate);
        collectionDiv.appendChild(saveBtn);
        collectionDiv.appendChild(likeBtn);
        collectionDiv.appendChild(deleteBtn);

        container.appendChild(collectionDiv);

        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';

        likeBtn.addEventListener('click', (e) => {
            e.preventDefault();

            let likesParagraph = document.querySelector('.likes').children[0];
            let likes = parseInt(likesParagraph.innerHTML[likesParagraph.innerHTML.length - 1]);
            likes++;

            likesParagraph.innerHTML = `Total Likes: ${likes}`;

            likeBtn.disabled = true;
        });

        saveBtn.addEventListener('click', (e) => {
            e.preventDefault();

            container.removeChild(collectionDiv);

            collectionDiv.removeChild(saveBtn);
            collectionDiv.removeChild(likeBtn);

            savedContainer.appendChild(collectionDiv);

            deleteBtn.addEventListener('click', (e) => {
                e.preventDefault();

                savedContainer.removeChild(collectionDiv);
            });
        });

        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();

            container.removeChild(collectionDiv);
        });
    });
}