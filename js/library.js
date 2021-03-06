import { Book } from './book.js';
import { buildTable } from './layout.js';


function initLibrary() {
    let defaultLibrary = [];
    // sample books
    let book1 = new Book('Game of Thrones', 'George RR Martin', 890, false);
    let book2 = new Book('Noughts & Crosses', 'Malorie Blackman', 673, true);
    defaultLibrary.push(book1);
    defaultLibrary.push(book2);

    saveLibrary(defaultLibrary);
    loadLibrary();
}

function resetLibrary() {
    saveLibrary([]);
    loadLibrary();
}

function getLibrary() {
    let myLibrary = JSON.parse(localStorage.getItem('library'));
    let myBooks = [];
    for (let book of myLibrary) {
        myBooks.push(new Book(...Object.values(book)));
    }

    return myBooks;
}

function saveLibrary(library) {
    return localStorage.setItem('library', JSON.stringify(library));
}

function loadLibrary() {

    let storedLibrary = localStorage.getItem('library');
    if (!storedLibrary) {
        return resetLibrary();
    }

    buildTable(JSON.parse(storedLibrary));
}


export {
    getLibrary,
    loadLibrary,
    saveLibrary,
    resetLibrary
};