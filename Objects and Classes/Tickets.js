function manageTickets(array, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = new Array();

    for (let line of array) {
        const token = line.split("|");

        let ticket = new Ticket(token[0], Number(token[1]), token[2]);
        tickets.push(ticket);
    }

    if (criteria == 'destination') {
        tickets = tickets.sort((x, y) => x.destination.localeCompare(y.destination));
    }
    else if (criteria == 'status') {
        tickets = tickets.sort((x, y) => x.status.localeCompare(y.status));
    }
    else if (criteria == 'price') {
        tickets = tickets.sort((x, y) => x.price - y.price);
    }

    return tickets;
}

console.log(manageTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));