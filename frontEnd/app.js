// git 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

import './styles/app.css';
import BookServices from './services/bookServices';

import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderBooks();
});

document.getElementById('book-form')
    .addEventListener('submit', e => {
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let isbn = document.getElementById('isbn').value;
        let image = document.getElementById('image').files;

        let formdata = new FormData();

        formdata.append('image', image[0]);
        formdata.append('isbn', isbn);
        formdata.append('author', author);
        formdata.append('title', title);

        let ui = new UI();
        ui.addNewBooks(formdata)
        ui.renderMessage('New Books Added', 'success', 3000)
        console.log(title, author, isbn, image);
        e.preventDefault();
    });
    
    document.getElementById('books-cards');
    addEventListener('click', e=> {
        if (e.target.classList.contains('delete')){
            console.log('eliminando');
            const ui = new UI();
            console.log(e.target.getAttribute('_id'));
            ui.deleteBook(e.target.getAttribute('_id'))
            ui.renderMessage('deleting book', 'danger',3000)
        }
        e.preventDefault();
    });