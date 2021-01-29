function solve() {
   const rows = document.getElementsByTagName('tbody')[0];

   rows.addEventListener('click', function (e) {
      e.preventDefault();

      let row = e.target.parentNode;

      if (row.getAttribute('style')) {
         row.style = '';
         return;
      }

      for (let i = 0; i < rows.children.length; i++) {
         if (rows.children[i].getAttribute('style')) {
            rows.children[i].style = '';
         }
      }

      row.style.backgroundColor = '#413f5e';
   });
}
