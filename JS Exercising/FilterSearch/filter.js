window.addEventListener('load', filter)

function filter() {
    const value = document.getElementById('value');

    value.addEventListener('keyup', (e) => {
        e.preventDefault();

        const ul = document.getElementById('menu');
        const li = ul.getElementsByTagName('li');

        for (let i = 0; i < li.length; i++) {
            if (li[i].innerHTML.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
                li[i].style.display = '';
            }
            else {
                li[i].style.display = 'none';
            }
        }
    });
}
