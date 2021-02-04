function pressHouse() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`;
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            if (content.length >= 150) {
                throw new Error('Short reports content should be less then 150 symbols.');
            }

            super(title, content);

            if (!originalResearch.hasOwnProperty('title') || !originalResearch.hasOwnProperty('author')) {
                throw new Error('The original research should have author and title.');
            }
            this.originalResearch = originalResearch;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);

            return 'The comment is added.';
        }

        toString() {
            let result = [];

            result.push(super.toString());
            result.push(`Original Research: ${this.originalResearch.title} by ${this.originalResearch.author}`);

            if (this.comments.length > 0) {
                result.push('Comments:');

                for (let comment of this.comments) {
                    result.push(comment);
                }
            }

            return result.join('\n');
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName, orderDescription) {
            let client = this.clients.find(x => x.clientName === clientName);

            if (!client) {
                client = {
                    clientName,
                    orderDescription: []
                };

                client.orderDescription.push(orderDescription);
                this.clients.push(client);

                return `${clientName} has ordered a review for ${this.book.name}`
            }

            let order = client.orderDescription.find(x => x === orderDescription);

            if (!order) {
                client.orderDescription.push(orderDescription);

                return `${clientName} has ordered a review for ${this.book.name}`;
            }

            throw new Error('This client has already ordered this review.');
        }

        toString() {
            let result = [];
            let orders = [];

            result.push(super.toString());
            result.push(`Book: ${this.book.name}`);
            let count = 0;

            for (let client of this.clients) {
                if (client.orderDescription.length > 0) {
                    for (let order of client.orderDescription) {
                        orders.push(`${client.clientName} - ${order}`);
                        count++;
                    }
                }
            }

            if (count > 0) {
                result.push('Orders:');
                orders.forEach((x) => result.push(x));
            }

            return result.join('\n');
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    };
}

let classes = pressHouse();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString());

let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript\"s features are executed in C++ — the underlying language.")
console.log(short.toString());

let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString()); 
