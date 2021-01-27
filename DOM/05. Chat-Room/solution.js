function solve() {
   const button = document.querySelector("button");
   const text = document.getElementById("chat_input");
   const textBox = document.getElementById("chat_messages");

   button.addEventListener("click", function (e) {
      e.preventDefault();
      let div = document.createElement("div");
      div.classList.add("message");
      div.classList.add("my-message");
      let messageText = document.createTextNode(text.value);
      div.appendChild(messageText);
      textBox.appendChild(div);

      document.getElementById("chat_input").value="";
   })
}


