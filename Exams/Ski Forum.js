class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 0;
        this.answers = [];
    }

    register(username, password, repeatPassword, email) {
        if (username === '' || password === '' || repeatPassword === '' || email === '') {
            throw new Error('Input can not be empty');
        }

        if (password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }

        let user = this._users.find(x => x.username === username || x.email === email);

        if (user !== undefined) {
            throw new Error('This user already exists!');
        }

        this._users.push({ username, password, repeatPassword, email });

        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        let user = this._users.find(x => x.username === username);

        if (!user) {
            throw new Error('There is no such user');
        }

        if (user.password === password) {
            user.logged = true;

            return 'Hello! You have logged in successfully';
        }
    }

    logout(username, password) {
        let user = this._users.find(x => x.username === username);

        if (!user) {
            throw new Error('There is no such user');
        }

        if (user.password === password) {
            user.logged = false;

            return 'You have logged out successfully';
        }
    }

    postQuestion(username, question) {
        let user = this._users.find(x => x.username === username);

        if (!user || user.logged === false) {
            throw new Error('You should be logged in to post questions')
        }

        if (question === '') {
            throw new Error('Invalid question');
        }

        this._id++;

        let id = this._id;

        this._questions.push({ id, question, username });

        return 'Your question has been posted successfully';
    }

    postAnswer(username, questionId, answer) {
        let user = this._users.find(x => x.username === username);

        if (!user || user.logged === false) {
            throw new Error('You should be logged in to post answers');
        }

        if (answer === '') {
            throw new Error('Invalid answer');
        }

        let question = this._questions.find(x => x.id === Number(questionId));

        if (!question) {
            throw new Error('There is no such question');
        }

        let id = Number(questionId);

        this.answers.push({ username, id, answer });

        return 'Your answer has been posted successfully';
    }

    showQuestions() {
        let result = [];

        for (let question of this._questions) {
            result.push(`Question ${question.id} by ${question.username}: ${question.question}`);

            for (let answer of this.answers) {
                if (answer.id === question.id) {
                    result.push(`---${answer.username}: ${answer.answer}`);
                }
            }
        }

        return result.join('\n');
    }
}

/*let forum = new Forum();

forum.register('Jonny', '12345', '12345', 'jonny@abv.bg');
forum.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com');
forum.login('Jonny', '12345');
forum.login('Peter', '123ab7');

forum.postQuestion('Jonny', "Do I need glasses for skiing?");
forum.postAnswer('Peter', 1, "Yes, I have rented one last year.");
forum.postAnswer('Jonny', 1, "What was your budget");
forum.postAnswer('Peter', 1, "$50");
forum.postAnswer('Jonny', 1, "Thank you :)");

console.log(forum.showQuestions());*/

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael', 2, "How old is she?");
forum.postAnswer('Michael', 2, "Tell us how tall she is.");

console.log(forum.showQuestions());


