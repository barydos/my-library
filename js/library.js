import { Book } from './book.js';
import { buildTable } from './layout.js';


function initLibrary() {
    let defaultLibrary = [];
    // sample books
    let book1 = new Book('First', 'Mr One', 100, true);
    let book2 = new Book('Second', 'Ms Two', 200, false);
    defaultLibrary.push(book1);
    defaultLibrary.push(book2);
   
    // localStorage.setItem('library', JSON.stringify(defaultLibrary));
    saveLibrary(defaultLibrary);
    loadLibrary();
}

function getLibrary() {
    let myLibrary = JSON.parse(localStorage.getItem('library'));
    // myLibrary = (myLibrary && myLibrary !== "[]") ? JSON.parse(myLibrary) : [];
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
    if (!storedLibrary)
        return initLibrary();

    buildTable(JSON.parse(storedLibrary));
}


export {
    getLibrary,
    loadLibrary,
    saveLibrary
};