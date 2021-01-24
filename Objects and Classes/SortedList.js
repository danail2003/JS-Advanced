class List {
    constructor() {
        this.array = new Array();
        this.size = 0;
    }

    add(element) {
        this.array.push(element);
        this.array = this.array.sort((x, y) => x - y);
        this.size++;

        return this.array;
    }

    remove(index) {
        if (index >= 0 && index < this.array.length) {
            this.array.splice(index, 1);
            this.array = this.array.sort((x, y) => x - y);
            this.size--;

            return this.array;
        }
    }

    get(index) {
        if (index >= 0 && index < this.array.length) {
            return this.array[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
