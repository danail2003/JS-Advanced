function validate() {
    const email = document.getElementById("email");

    email.addEventListener('change', function (e) {
        if (email.value.match(/^[a-z]+@[a-z]+.[a-z]{2,4}$/)) {
            email.classList.remove('error');
        }
        else {
            email.classList.add('error');
        }
    })
}