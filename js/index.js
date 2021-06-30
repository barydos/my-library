// start main logic //

let myLibrary = [];
// sample books
let book1 = new Book('First', 'Mr One', 100, true);
let book2 = new Book('Second', 'Ms Two', 200, false);
myLibrary.push(book1);
myLibrary.push(book2);

// initialise book table
loadLibrary();

// end main logic //


// constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function loadLibrary() {
    let booksDisplay = document.querySelector('.books');
    let bookTable = document.createElement('table');

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
        addToBookTable(tableElem, book);
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
}
