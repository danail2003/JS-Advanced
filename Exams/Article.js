class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same article twice!');
        }

        if (this.creator === username) {
            throw new Error('You can\'t like your own articles!');
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error('You can\'t dislike this article!');
        }

        this._likes = this._likes.filter(x => x !== username);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let comment = this._comments.find(x => x.id === id);

        if (!comment || id === undefined) {
            this._comments.push({ id: this._comments.length + 1, username, content, replies: [] });

            return `${username} commented on ${this.title}`;
        }

        comment.replies.push({ id: `${id}.${comment.replies.length + 1}`, username, content });

        return 'You replied successfully';
    }

    toString(sortingType) {
        let result = [];
        let sorted;

        if (sortingType === 'asc') {
            sorted = this._comments.sort((a, b) => a.id - b.id);
        }
        else if (sortingType === 'desc') {
            sorted = this._comments.sort((a, b) => b.id - a.id);
        }
        else if (sortingType === 'username') {
            sorted = this._comments.sort((a, b) => a.username.localeCompare(b.username));
        }

        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push('Comments:');

        for (let comment of sorted) {
            result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);

            if (comment.replies.length > 0) {
                let sortedReplies;

                if (sortingType === 'asc') {
                    sortedReplies = comment.replies.sort((a, b) => a.id - b.id);
                }
                else if (sortingType === 'desc') {
                    sortedReplies = comment.replies.sort((a, b) => b.id - a.id);
                }
                else if (sortingType === 'username') {
                    sortedReplies = comment.replies.sort((a, b) => a.username.localeCompare(b.username));
                }

                for (let reply of sortedReplies) {
                    result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`);
                }
            }
        }

        return result.join('\n');
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));