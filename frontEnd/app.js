import './styles/app.css';

document.getElementById('book-form')
    .addEventListener('submit', e => {
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let isbn = document.getElementById('isbn').value;
        let image = document.getElementById('image').files;


        console.log(title, author, isbn, image);
        e.preventDefault();
    });