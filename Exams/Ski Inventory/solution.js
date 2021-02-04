function solve() {
   const addBtn = document.getElementsByTagName('button')[1];
   const filterBtn = document.getElementsByTagName('button')[0];
   const buyBtn = document.getElementsByTagName('button')[2];
   let totalPrice = 0;

   addBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const product = document.getElementsByTagName('input')[1].value;
      let quantity = document.getElementsByTagName('input')[2].value;
      const price = document.getElementsByTagName('input')[3].value;

      const ul = document.getElementById('products').children[1];
      const li = document.createElement('li');
      const span = document.createElement('span');
      const strong = document.createElement('strong');
      const div = document.createElement('div');
      const priceStrong = document.createElement('strong');
      const addClientBtn = document.createElement('button');

      span.textContent = product;
      strong.textContent = `Available: ${quantity}`;
      priceStrong.textContent = price;
      addClientBtn.textContent = 'Add to Client\'s List';

      div.appendChild(priceStrong);
      div.appendChild(addClientBtn);
      li.appendChild(span);
      li.appendChild(strong);
      li.appendChild(div);
      ul.appendChild(li);

      addClientBtn.addEventListener('click', function () {
         const myProducts = document.getElementsByTagName('ul')[1];
         const boughtLi = document.createElement('li');
         const boughtPrice = document.createElement('strong');

         boughtLi.textContent=product;
         boughtPrice.textContent = Number(price);
         boughtLi.appendChild(boughtPrice);
         myProducts.appendChild(boughtLi);

         totalPrice += Number(price);
         document.getElementsByTagName('h1')[1].textContent = `Total Price: ${totalPrice.toFixed(2)}`;

         if (Number(quantity) === 1) {
            ul.removeChild(li);
         }
         else {
            quantity -= 1;
            strong.textContent = `Available: ${quantity}`;
         }
      });
   });

   filterBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const text = document.getElementsByTagName('input')[0].value;

      Array.from(document.getElementsByTagName('ul')[0].children).forEach((li) => {
         if (li.children[0].textContent.toLowerCase().includes(text.toLowerCase())) {
            li.style.display = 'block';
         }
         else {
            li.style.display = 'none';
         }
      });
   });

   buyBtn.addEventListener('click', function (e) {
      e.preventDefault();

      document.getElementsByTagName('ul')[1].innerHTML = '';
      document.getElementsByTagName('h1')[1].textContent = 'Total Price: 0.00';
   });
}
