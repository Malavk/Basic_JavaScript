"use strict";

//es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (changeText) {
    this.text = changeText;
}

var post1 = new Post('Oleg', 'I am gaint', 2020);
console.log(post1);
post1.edit('You are fool');
console.log(post1);

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

var attachedpost1 = new AttachedPost('Igor', 'I am a boy', 2020);
console.log(attachedpost1);
attachedpost1.makeTextHighlighted();
attachedpost1.edit('You are a girl');
console.log(attachedpost1); 