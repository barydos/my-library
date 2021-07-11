import { myLibrary, addBookToLibrary, deleteBook } from './index.js'

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function loadLibrary() {
    let booksDisplay = document.querySelector('.books');
    let library = document.querySelector('.library');
    if (library)
        library.remove();
    
    if (myLibrary.length === 0) {
        document.querySelector('#empty-msg').style.display = "block";
        return;
    } else {
        document.querySelector('#empty-msg').style.display = "none";
    }

    let bookTable = document.createElement('table');
    bookTable.classList.add('library');

    generateBooksHeading(bookTable);
    generateBooksBody(bookTable);

    booksDisplay.appendChild(bookTable);

    document.querySelector('.book-input').addEventListener('submit', addBookToLibrary);
    document.querySelectorAll('.delete').forEach(btn => {
        btn.addEventListener('click', deleteBook);
    });
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
    let rowNum = tableElem.childNodes.length;
    let row = tableElem.insertRow();
    row.setAttribute('data-row', rowNum);
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
    del.classList.add('delete');
    td.appendChild(del);
    row.appendChild(td);
}

export {
    Book, 
    generateBooksHeading, 
    generateBooksBody,
    loadLibrary
};