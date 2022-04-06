class Book {

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    bookInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages`
    }
}

// Store books
let books = [];

// Handle clicks
document.addEventListener("click", (e) => {

    console.log(e.target);

    if (e.target.getAttribute("data-action") === "delete") {
        console.log("delet");
        books.splice(e.target.parentNode.getAttribute("data-index"), 1);
        updateDisplay();
        updateLocalStorage();
    }
})



const booksSection = document.querySelector(".books");

// Display books
function updateDisplay() {

    booksSection.innerHTML = "";

    let bookCounter = 0;

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

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "X";
        deleteButton.setAttribute("data-action", "delete");

        bookContainer.appendChild(deleteButton);

        // Add data attribute for delete button
        bookContainer.setAttribute("data-index", bookCounter)
        bookCounter = bookCounter + 1;
    })
}

// Add book
const modalContainer = document.querySelector(".modal-container");

const addBookButton = document.querySelector(".add-book-dialog");

addBookButton.addEventListener("click", () => {
    modalContainer.style.display = "flex";
});

const userBookTitle = document.querySelector(".book-title");
const userBookAuthor = document.querySelector(".book-author");
const userBookPages = document.querySelector(".book-pages");
const userBookRead = document.querySelector(".book-read");

const confirmAddButton = document.querySelector(".submit");

confirmAddButton.addEventListener("click", () => {

    books.push(new Book(userBookTitle.value, userBookAuthor.value,
                        userBookPages.value, userBookRead.checked));

    
    updateDisplay();
    updateLocalStorage();
    modalContainer.style.display = "none";

    userBookTitle.value = "";
    userBookAuthor.value = "";
    userBookPages.value = "";
    userBookRead.checked = false;
});

const cancelAddButton = document.querySelector(".cancel");
cancelAddButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
});

// Store books[] in local storage
function updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

function readLocalStorage() {

    console.log("local storage check");

    if (localStorage.getItem("books")) {
        books = JSON.parse(localStorage.getItem("books"));
        updateDisplay();
    }
}

// Checks for books stored in local storage on page load
readLocalStorage();
