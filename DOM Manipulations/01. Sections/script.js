function create(words) {
   const content = document.getElementById("content");

   for (let i = 0; i < words.length; i++) {
      const div = document.createElement("div");
      const paragraph = document.createElement("p");
      paragraph.textContent = words[i];
      paragraph.style.display = 'none';
      div.appendChild(paragraph);

      div.addEventListener("click", function (e) {
         paragraph.style.display = 'block';
      })

      content.appendChild(div);
   }
}