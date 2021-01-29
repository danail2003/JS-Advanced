function solve() {
    const styleButton = document.getElementById('dropdown');
    const ul = document.getElementById('dropdown-ul');
    const box = document.getElementById('box');
    let count = 0;

    styleButton.addEventListener('click', function (e) {
        e.preventDefault();
        count++;

        if (count === 2) {
            ul.style.display = 'none';
            box.style.backgroundColor = 'black';
            box.style.color = 'white';
            count = 0;
        }
        else {
            ul.style.display = 'block';
        }
    });

    ul.addEventListener('click', function (e) {
        e.preventDefault();

        let backgroundColor = e.target.textContent;

        box.style.backgroundColor = backgroundColor;
        box.style.color = 'black';
    });
}