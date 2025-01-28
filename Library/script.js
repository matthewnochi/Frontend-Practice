const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}
const library = document.getElementById("lib");

function addBookToLibrary(book) {
    myLibrary.push(book);
    const card = document.createElement("div");
    card.classList.add("lib-card");
    library.appendChild(card);
    const titleText = document.createElement("p");
    const authorText = document.createElement("p");
    const pagesText = document.createElement("p");
    const readText = document.createElement("p");
    titleText.textContent = "Title: " + book.title;
    authorText.textContent = "Author: " + book.author;
    pagesText.textContent = "Number of Pages: " + book.pages;
    readText.textContent = "Completed: " + book.read;

    card.appendChild(titleText);
    card.appendChild(authorText);
    card.appendChild(pagesText);
    card.appendChild(readText);
}

const button = document.getElementById("add");
const container = document.getElementById("container");

button.addEventListener("click", function() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("add-book");
    container.replaceChild(newDiv, button);
    const bookForm = document.createElement("form");
    newDiv.appendChild(bookForm);
    const title = document.createElement("input");
    const author = document.createElement("input");
    const pages = document.createElement("select");
    const read = document.createElement("input");
    const submit = document.createElement('input');

    const tlabel = document.createElement("label");
    const alabel = document.createElement("label");
    const plabel = document.createElement("label");
    const rlabel = document.createElement("label");

    tlabel.textContent = "Title: ";
    alabel.textContent = "Author: ";
    plabel.textContent = "Pages: ";
    rlabel.textContent = "Completed: ";
    
    title.setAttribute("type", "text");
    title.setAttribute("required", true);
    title.setAttribute("id", "form-title");
    author.setAttribute("type", "text");
    author.setAttribute("required", true);
    author.setAttribute("id", "form-author");
    pages.setAttribute("required", true);
    for (let i = 1; i <= 1000; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        pages.appendChild(option);
    }
    pages.setAttribute("id", "form-pages");
    read.setAttribute("type", "checkbox")
    read.setAttribute("id", "form-read");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");

    bookForm.appendChild(tlabel);
    bookForm.appendChild(title);
    bookForm.appendChild(document.createElement('br'));
    bookForm.appendChild(alabel);
    bookForm.appendChild(author);
    bookForm.appendChild(document.createElement('br'));
    bookForm.appendChild(plabel);
    bookForm.appendChild(pages);
    bookForm.appendChild(document.createElement('br'));
    bookForm.appendChild(rlabel);
    bookForm.appendChild(read);
    bookForm.appendChild(document.createElement('br'));
    bookForm.appendChild(submit);
    

    bookForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const answerTitle = document.getElementById("form-title").value; 
        const answerAuthor = document.getElementById("form-author").value; 
        const answerPages = document.getElementById("form-pages").value; 
        const answerRead = document.getElementById("form-read").checked; 

        const newBook = new Book(answerTitle, answerAuthor, answerPages, answerRead);
        addBookToLibrary(newBook);

        container.replaceChild(button, newDiv);
    });
});



const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary(theHobbit);
const gatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 208, false);
addBookToLibrary(gatsby);