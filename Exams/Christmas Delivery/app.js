function solution() {
    const giftName = document.getElementsByTagName('input')[0];
    const addBtn = document.getElementsByTagName('button')[0];
    const giftsList = document.getElementsByClassName('card')[1].children[1];
    const sentGifts = document.getElementsByClassName('card')[2].children[1];
    const discardGifts = document.getElementsByClassName('card')[3].children[1];

    addBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (!giftName.value) {
            return;
        }

        const li = document.createElement('li');
        const sendBtn = document.createElement('button');
        const discardBtn = document.createElement('button');
        li.classList.add('gift');
        li.textContent = giftName.value;
        sendBtn.setAttribute('id', 'sendButton');
        sendBtn.textContent = 'Send';
        discardBtn.setAttribute('id', 'discardButton');
        discardBtn.textContent = 'Discard';
        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        giftsList.appendChild(li);

        let gifts = Array.from(giftsList.children).sort((a, b) => a.textContent.localeCompare(b.textContent));
        giftsList.innerHTML = '';
        gifts.forEach((li) => giftsList.appendChild(li));

        giftName.value = '';

        sendBtn.addEventListener('click', function () {
            li.removeChild(sendBtn);
            li.removeChild(discardBtn);
            giftsList.removeChild(li);

            sentGifts.appendChild(li);
        });

        discardBtn.addEventListener('click', function () {
            li.removeChild(sendBtn);
            li.removeChild(discardBtn);
            giftsList.removeChild(li);

            discardGifts.appendChild(li);
        });
    });
}