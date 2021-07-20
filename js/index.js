import { loadLibrary, resetLibrary } from './library.js';

loadLibrary();

let modal = document.querySelector('.modal');
let modalContent = document.querySelector('.modal-content');
let closeModalBtn = document.querySelector('#close-modal');
let form = document.querySelector('form');
let resetBtn = document.querySelector('.reset');
let newBookBtn = document.querySelector('#new-btn');

closeModalBtn.addEventListener('click', closeForm)
resetBtn.addEventListener('click', () => {
    let checkReset = confirm('Reset library?');
    if (!checkReset)
        return;

    resetLibrary();
})
newBookBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.classList.add('popup');
    
    let titleInput = document.querySelector('#submit-book');
    titleInput.focus();
});

function closeForm() {
    form.reset();
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal)
        closeForm();
}
window.onkeyup = function (event) {
    if (event.key === 'Escape')
        closeForm();
}
window.onload = () => {
    let loader = document.querySelector('.loader');
    loader.style.display = 'none';
}
