const booksSection = document.querySelector(".books");


function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.bookInfo = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages`
}

// Store books
const books = [];

// Display books
function updateDisplay() {

    books.forEach(book => {
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book");
        
        // Title
        const bookTitle = document.createElement("h2");
        bookTitle.classList.add("title");
        bookTitle.textContent = book.title;
        bookContainer.appendChild(bookTitle);

        // Author
        const bookAuthor = document.createElement("h3");
        bookAuthor.classList.add("author");
        bookAuthor.textContent = book.author;
        bookContainer.appendChild(bookAuthor);

        // Pages
        const bookPages = document.createElement("p");
        bookPages.classList.add("pages");
        bookPages.textContent = book.pages;
        bookContainer.appendChild(bookPages);

        // Read checkbox container
        const bookReadContainer = document.createElement("div");
        bookReadContainer.classList.add("read-container");
        bookContainer.appendChild(bookReadContainer);

        // Read checkbox label
        const bookReadLabel = document.createElement("label");
        bookReadLabel.htmlFor = "read";
        bookReadLabel.textContent = "Read? ";
        bookReadContainer.appendChild(bookReadLabel);

        // Read checkbox
        const bookReadCheckbox = document.createElement("input");
        bookReadCheckbox.classList.add("read");
        bookReadCheckbox.type = "checkbox";
        bookReadCheckbox.name = "read";
        bookReadContainer.appendChild(bookReadCheckbox);       
        
        // Add book to page
        booksSection.appendChild(bookContainer);
    })
}

// Add book
function addBook() {
    return new Book("Title", "Author", 316);
}

// Fill books array with dummy data
books.push(addBook());
books.push(addBook());
books.push(addBook());

books.push(addBook());
books.push(addBook());
books.push(addBook());


updateDisplay();

console.table(books);

