function solve() {
   const rows = document.querySelectorAll('tbody > tr');
   const button = document.getElementById('searchBtn');

   button.addEventListener('click', function (e) {
      e.preventDefault();

      const text = document.getElementById('searchField').value;

      Array.from(rows).map(x => x.classList = '');

      for (let i = 0; i < rows.length; i++) {
         let row = rows[i];
         let data = row.querySelectorAll('td');

         for (const cell of data) {
            let cellHTML = cell.innerHTML;

            if (cellHTML.toLowerCase().includes(text.toLowerCase())) {
               row.className = 'select';
            }
         }
      }

      document.getElementById('searchField').value = '';
   });
}