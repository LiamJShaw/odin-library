function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.bookInfo = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages`
}

const bookTheHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295);

console.log(bookTheHobbit.bookInfo());