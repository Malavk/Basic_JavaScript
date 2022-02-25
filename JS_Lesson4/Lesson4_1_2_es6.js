"use strict";

//es6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit (text) {
        this.text = text;
    }
}

var post1 = new Post('Oleg', 'I am gaint', 2020);
console.log(post1);
post1.edit('You are fool');
console.log(post1);

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

var attachedpost1 = new AttachedPost('Igor', 'I am a boy', 2020);
console.log(attachedpost1);
attachedpost1.makeTextHighlighted();
attachedpost1.edit('You are a girl');
console.log(attachedpost1); 