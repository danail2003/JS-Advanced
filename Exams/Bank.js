class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let currCustomer = this.allCustomers.find(x => x.personalId === customer.personalId);

        if (!currCustomer) {
            this.allCustomers.push(customer);

            return customer;
        }

        throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
    }

    depositMoney(personalId, amount) {
        let customer = this.allCustomers.find(x => x.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        if (!customer.hasOwnProperty('totalMoney')) {
            customer.totalMoney = 0;
        }

        if (!customer.hasOwnProperty('transactions')) {
            customer.transactions = [];
            customer.count = 0;
        }

        customer.count++;
        customer.transactions.unshift(`${customer.count}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

        customer.totalMoney += Number(amount);

        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let customer = this.allCustomers.find(x => x.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        if (customer.totalMoney < Number(amount)) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= Number(amount);

        customer.count++;
        customer.transactions.unshift(`${customer.count}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        let customer = this.allCustomers.find(x => x.personalId === personalId);
        let result = [];

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        result.push(`Customer ID: ${customer.personalId}`);
        result.push(`Total Money: ${customer.totalMoney}$`);
        result.push('Transactions:');

        for (let transaction of customer.transactions) {
            result.push(transaction);
        }

        return result.join('\n');
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
