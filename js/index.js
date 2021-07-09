// start main logic //

let myLibrary = [];
// sample books
let book1 = new Book('First', 'Mr One', 100, true);
let book2 = new Book('Second', 'Ms Two', 200, false);
myLibrary.push(book1);
myLibrary.push(book2);

// initialise book table
loadLibrary();

let bookForm = document.querySelector('.book-input');
bookForm.addEventListener('submit', addBookToLibrary);

// end main logic //


// constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(e) {
    e.preventDefault();

    let [title, author, pages, read] = [...e.target.elements].map(item => item.value);
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    loadLibrary();
    this.reset();
}

function loadLibrary() {
    let booksDisplay = document.querySelector('.books');
    let library = document.querySelector('.library');
    if (library)
        library.remove();

    let bookTable = document.createElement('table');
    bookTable.classList.add('library');

    generateBooksHeading(bookTable);
    generateBooksBody(bookTable);

    booksDisplay.appendChild(bookTable);
}

function generateBooksHeading(tableElem) {
    let tHead = tableElem.createTHead();
    let row = tHead.insertRow();
    for (let header of ['Title', 'Author', 'Pages', 'Read']) {
        let th = document.createElement('th');
        let text = document.createTextNode(header);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateBooksBody(tableElem) {
    let tBody = document.createElement('tbody');
    tableElem.appendChild(tBody);
    for (let book of myLibrary) {
        addToBookTable(tBody, book);
    }
}

function addToBookTable(tableElem, book) {
    let row = tableElem.insertRow();
    for (let [key, val] of Object.entries(book)) {
        let td = document.createElement('td');
        let text = document.createTextNode(val);
        td.appendChild(text);
        row.appendChild(td);
    }
    
    // Add delete button
    let td = document.createElement('td');
    let del = document.createElement('button');
    let text = document.createTextNode('x');
    del.appendChild(text);
    td.appendChild(del);
    row.appendChild(td);
}
