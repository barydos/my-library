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

    let [title, author, pages, status] = [...e.target.elements].map(item => item.value);
    debugger;
    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);

    loadLibrary();
    this.reset();
}

function deleteBook(e) {
    let rowNum = e.target.closest('tr').getAttribute('data-row');
    myLibrary.splice(rowNum, 1);
    loadLibrary();
}

function toggleStatus(e) {
    let rowNum = e.target.closest('tr').getAttribute('data-row');
    debugger;
    myLibrary[rowNum].toggleStatus();
    loadLibrary();
}


export { myLibrary, addBookToLibrary, deleteBook, toggleStatus };

/**
 * TODO: 
 * 1. Toggle `read` status [DONE]
 * 2. Add localStorage functionality
 * 3. Add CSS to make pretty (change footer to github) incl. fonts
 * 4. Create a modal to `edit` book
 * 5. Convert submission to a modal (New Book + button)
 * 6. Add confirmation prompt for deleting a book.
 */