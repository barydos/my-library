import { addBook, deleteBook, toggleStatus } from './book.js';

function buildTable(myLibrary) {
    let booksDisplay = document.querySelector('.books');
    let library = document.querySelector('.library');
    if (library)
        library.remove();

    if (myLibrary && myLibrary.length === 0) {
        document.querySelector('#empty-msg').style.display = "block";
        setEventListeners();
        return;
    } else {
        document.querySelector('#empty-msg').style.display = "none";
    }

    let bookTable = document.createElement('table');
    bookTable.classList.add('library');

    generateBooksHeading(bookTable);
    generateBooksBody(bookTable, myLibrary);

    booksDisplay.appendChild(bookTable);
    let btn = document.createElement('button');

    setEventListeners();

    function setEventListeners() {
        document.querySelector('.book-input').addEventListener('submit', addBook);
        document.querySelectorAll('.delete').forEach(btn => {
            btn.addEventListener('click', deleteBook);
        });
        document.querySelectorAll('.status').forEach(btn => {
            btn.addEventListener('click', toggleStatus);
        });
    }
}

function generateBooksHeading(tableElem) {
    let tHead = tableElem.createTHead();
    let row = tHead.insertRow();
    for (let header of ['Title', 'Author', 'Pages', 'Status', '']) {
        let th = document.createElement('th');
        let text = document.createTextNode(header);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateBooksBody(tableElem, myLibrary) {
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

        if (key.toLowerCase() == 'status') {
            let td = document.createElement('td');
            let btn = document.createElement('button');
            let text = document.createTextNode(!!val ? 'READ' : 'NOT READ');
            btn.appendChild(text);
            td.appendChild(btn);
            row.appendChild(td);
            btn.classList.add('status');

            continue;
        }

        let td = document.createElement('td');
        let text = document.createTextNode(val);
        td.appendChild(text);
        row.appendChild(td);
    }

    // Add delete button
    let td = document.createElement('td');
    let del = document.createElement('button');
    let text = document.createTextNode('DELETE');
    del.appendChild(text);
    del.classList.add('delete');
    del.setAttribute('type', 'submit');
    td.appendChild(del);
    row.appendChild(td);
}

export { buildTable };