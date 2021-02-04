function solve() {
   const createBtn = document.getElementsByClassName('btn create')[0];

   createBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const creator = document.getElementById('creator').value;
      const title = document.getElementById('title').value;
      const category = document.getElementById('category').value;
      const content = document.getElementById('content').value;

      const article = document.createElement('article');
      const main = document.getElementsByClassName('site-content')[0].querySelectorAll('main > section')[0];
      const h1 = document.createElement('h1');
      const categoryParagraph = document.createElement('p');
      const creatorParagraph = document.createElement('p');
      const contentParagraph = document.createElement('p');
      const div = document.createElement('div');
      const deleteBtn = document.createElement('button');
      const archiveBtn = document.createElement('button');

      h1.textContent = title;
      categoryParagraph.innerHTML = `Category:\n<strong>${category}</strong>`;
      creatorParagraph.innerHTML = `Creator:\n<strong>${creator}</strong>`;
      contentParagraph.textContent = content;
      div.classList.add('buttons');
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete');
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');
      deleteBtn.textContent = 'Delete';
      archiveBtn.textContent = 'Archive';

      div.appendChild(deleteBtn);
      div.appendChild(archiveBtn);
      article.appendChild(h1);
      article.appendChild(categoryParagraph);
      article.appendChild(creatorParagraph);
      article.appendChild(contentParagraph);
      article.appendChild(div);
      main.appendChild(article);

      deleteBtn.addEventListener('click', function () {
         main.removeChild(article);
      });

      archiveBtn.addEventListener('click', function () {
         const archive = document.getElementsByClassName('archive-section')[0].children[1];

         const li = document.createElement('li');

         li.textContent = title;
         archive.appendChild(li);
         main.removeChild(article);

         let sorted = Array.from(archive.children).sort((a, b) => a.textContent.localeCompare(b.textContent));

         archive.innerHTML = '';

         sorted.forEach(x => archive.appendChild(x));
      });
   });
}
