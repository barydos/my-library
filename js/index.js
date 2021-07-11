import { Book, loadLibrary } from './library.js';

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


function addBookToLibrary(e) {
    e.preventDefault();

    let [title, author, pages, read] = [...e.target.elements].map(item => item.value);
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    loadLibrary();
    this.reset();
}

function deleteBook(e) {
    let rowNum = e.target.closest('tr').getAttribute('data-row');
    debugger;
    myLibrary.splice(rowNum, 1);
    loadLibrary();
}


export { myLibrary, addBookToLibrary, deleteBook };
