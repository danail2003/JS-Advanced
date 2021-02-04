function solve() {
    const ul = document.createElement('ul');
    const div = document.createElement('div');
    div.appendChild(ul);
    const trainingDiv = document.getElementsByTagName('div')[0];
    trainingDiv.appendChild(div);
    const addBtn = document.getElementsByTagName('button')[0];
    let moduleArray = [];

    addBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const name = document.getElementsByTagName('input')[0].value;
        const date = document.getElementsByTagName('input')[1].value;
        const module = document.getElementsByTagName('select')[0].value;

        if (!name || !date || !module || module === 'Select module') {
            return;
        }

        const deleteBtn = document.createElement('button');

        const h3 = document.createElement('h3');
        const li = document.createElement('li');
        const h4 = document.createElement('h4');

        div.classList.add('module');
        h3.textContent = `${module.toUpperCase()}-MODULE`;
        li.classList.add('flex');

        let newDate = new Date(date);
        let day = '' + newDate.getDate();
        let month = '' + (newDate.getMonth() + 1);
        let year = '' + newDate.getFullYear();
        let hours = '' + newDate.getHours();
        let minutes = '' + newDate.getMinutes();


        if(day.length<2){
            day='0'+day;
        }

        if(month.length<2){
            month='0'+month;
        }

        if(hours.length<2){
            hours='0'+hours;
        }

        if(minutes.length<2){
            minutes='0'+minutes;
        }

        let newFormat = `${year}/${month}/${day} - ${hours}:${minutes}`;

        h4.textContent = `${name} - ${newFormat}`;
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Del';
        li.appendChild(h4);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
        
        if (!moduleArray.includes(module)) {
            div.appendChild(h3);
            
            moduleArray.push(module);
            div.appendChild(ul);
        }
        else{
            div.appendChild(ul);
        }

        deleteBtn.addEventListener('click', function () {
            li.remove();

            if (ul.children.length === 0) {
                div.remove();
            }
        });
    });
};