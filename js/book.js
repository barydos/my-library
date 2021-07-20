import { getLibrary, saveLibrary, loadLibrary } from './library.js'

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status == 1;
}

Book.prototype = {
    toggleStatus: function() {
        this.status = !this.status;
    }
}

function toggleStatus(e) {
    let rowNum = e.target.closest('tr').getAttribute('data-row');
    let myLibrary = getLibrary();
    myLibrary[rowNum].toggleStatus();
    saveLibrary(myLibrary);
    loadLibrary();
}

function addBook(e) {
    e.preventDefault();

    let [title, author, pages, status] = [...e.target.elements].map(item => item.value);
    let newBook = new Book(title, author, pages, status);
    
    let currLibrary = getLibrary();
    currLibrary.push(newBook);
    saveLibrary(currLibrary);
    loadLibrary();

    this.reset();
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

function deleteBook(e) {
    let rowNum = e.target.closest('tr').getAttribute('data-row');
    let myLibrary = getLibrary();
    
    if (!confirm(`Are you sure you want to remove the following book: \n - "${myLibrary[rowNum].title}"`)) {
        return;
    }

    myLibrary.splice(rowNum, 1);
    saveLibrary(myLibrary);
    loadLibrary();
}


export { Book, toggleStatus, addBook, deleteBook };
