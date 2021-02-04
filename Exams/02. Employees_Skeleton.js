function solveClasses() {
    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }

        addTask(id, taskName, priority) {
            if (priority === 'high') {
                this.tasks.unshift({ id, taskName, priority });
            }
            else {
                this.tasks.push({ id, taskName, priority });
            }

            return `Task id ${id}, with ${priority} priority, has been added.`;
        }

        doTask() {
            let task;
            let index = 0;

            for (let i = this.tasks.length; i > 0; i++) {
                if (this.tasks[i].priority === 'high') {
                    task = this.tasks[i];
                    break;
                }
            }

            index = this.tasks.indexOf(task);

            this.tasks = this.tasks.splice(index, 1);

            return `${task.taskName}, you have finished all your tasks. You can rest now.`;
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }

        reviewTasks() {
            let result = [];

            result.push('Tasks, that need to be completed:');

            for (let task of this.tasks) {
                result.push(`${task.id}: ${task.taskName} - ${task.priority}`);
            }

            return result.join('\n');
        }
    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = this.baseSalary + bonus;
            this.tasks = [];
            this.experience = experience;
        }

        learn(years) {
            this.experience += Number(years);
        }
    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = this.baseSalary + bonus;
            this.experience = Number(experience) + 5;
        }

        changeTaskPriority(taskId) {
            let task = this.tasks.find(x => x.id === taskId);
            let index = this.tasks.indexOf(task);

            this.tasks = this.tasks.splice(index, 1);

            if (task.priority === 'high') {
                task.priority = 'low';
                this.tasks.push(task);
            }
            else {
                task.priority = 'high';
                this.tasks.unshift(task);
            }

            return task;
        }
    }

    return {
        Developer,
        Junior,
        Senior
    }
}

let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());

const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);
