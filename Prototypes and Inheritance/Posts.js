function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let result = [];

            result.push(`Post: ${this.title}`);
            result.push(`Content: ${this.content}`);

            return result.join('\n');
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = [];

            result.push(super.toString());
            result.push(`Rating: ${this.likes - this.dislikes}`);

            if (this.comments.length > 0) {
                result.push('Comments:');

                this.comments.forEach(x => result.push(` * ${x}`));
            }

            return result.join('\n');
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;

            return this;
        }

        toString() {
            let result = [];

            result.push(super.toString());
            result.push(`Views: ${this.views}`);

            return result.join('\n');
        }
    }

    return { Post, SocialMediaPost, BlogPost };
}

let classes = solve();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
