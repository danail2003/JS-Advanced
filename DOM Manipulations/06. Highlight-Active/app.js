function focus() {
    const divs = document.getElementsByTagName("div")[0].children;

    for (let i = 0; i < divs.length; i++) {
        divs[i].lastElementChild.addEventListener('focus', function (e) {
            let div = this.parentElement;

            for (let j = 0; j < divs.length; j++) {
                if (divs[j] !== div) {
                    divs[j].classList.remove('focused');
                }
            }

            div.classList.add('focused');
        });
    }
}