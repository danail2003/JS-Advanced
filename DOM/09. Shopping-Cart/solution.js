function solve() {
   let items = [];
   let itemsObject = {
      'Bread': 0.80,
      'Milk': 1.09,
      'Tomatoes': 0.99
   };

   let isFinish = false;
   const textBox = document.querySelector("textarea");
   let sum = 0;

   Array.from(document.querySelectorAll('button')).map(x => x.addEventListener("click", function (e) {
      e.preventDefault();

      let button = e.target.className;

      if (button == "add-product" && !isFinish) {
         let item = e.target.parentNode.parentNode.children[1].children[0].textContent;
         textBox.textContent += `Added ${item} for ${itemsObject[item].toFixed(2)} to the cart.\n`;

         sum += itemsObject[item];

         if (!items.includes(item)) {
            items.push(item);
         }
      }
      else {
         if (!isFinish) {
            textBox.textContent += `You bought ${items.join(", ")} for ${sum.toFixed(2)}.\n`;
            isFinish = true;
         }
      }
   }));
}