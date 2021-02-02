function solve() {
    class Employee {
        constructor(name, age, ) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let result = this.tasks.shift();
            console.log(`${this.name} ${result}`);
            this.tasks.push(result);
        }

        getSalary() {
            return this.salary;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`is working on a complicated task.`,
            `is taking time off work.`,
            `is supervising junior workers.`
            ];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`scheduled a meeting.`, `is preparing a quarterly report.`];
            this.dividend = 0;
        }

        getSalary() {
            return super.getSalary() + this.dividend;
        }
    }

    return {
        Employee, Junior, Senior, Manager
    };
}