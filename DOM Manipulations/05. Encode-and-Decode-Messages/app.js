function encodeAndDecodeMessages() {
    const firstTextArea = document.getElementsByTagName('textarea')[0];
    const secondTextArea = document.getElementsByTagName('textarea')[1];
    const encodeButton = document.getElementsByTagName('button')[0];
    const decodeButton = document.getElementsByTagName('button')[1];

    encodeButton.addEventListener('click', function (e) {
        e.preventDefault();
        const message = firstTextArea.value;

        secondTextArea.value = [...message].map((_, i) => message[i] = String.fromCharCode(message[i].charCodeAt(0) + 1)).join('');

        firstTextArea.value = '';
    });

    decodeButton.addEventListener('click', function (e) {
        e.preventDefault();

        const encodeMessage = document.getElementsByTagName('textarea')[1].value;

        secondTextArea.value = [...encodeMessage].map((_, i) => encodeMessage[i] = String.fromCharCode(encodeMessage[i].charCodeAt(0) - 1)).join('');
    })
}