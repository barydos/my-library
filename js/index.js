import { loadLibrary } from './library.js';

// initialise book table
loadLibrary();

let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    let checkReset = confirm('Reset library?');
    if (!checkReset)
        return;

    localStorage.clear();
    loadLibrary();
});

/**
 * TODO:
 * 1. Toggle `read` status [DONE]
 * 2. Add localStorage functionality [DONE]
 * 3. Add CSS to make pretty (change footer to github) incl. fonts [DONE]
 * 4. Create a modal to `edit` book
 * 5. Convert submission to a modal (New Book + button)
 * 6. Add confirmation prompt for deleting a book.
 */