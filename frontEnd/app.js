// git 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

import './styles/app.css';
//import BookServices from './services/bookServices'
import './styles/output.css'

import UI from './UI';

import Book from './models/book'

render();

agregar();

eliminar();

// update();


function eliminar() {
    document.getElementById('books-cards').addEventListener('click', e => {

            if (e.target.classList.contains('delete') ) {
                console.log(e.target.classList.contains('delete'));
                let ui = new UI();
                ui.deleteBook(e.target.getAttribute('_id'));
                ui.renderMessage('deleting book', 'danger', 3000);
            };

            e.preventDefault();
        });
    }


    // function update(){
    //     document.getElementById('book-form').addEventListener('submit', e => {
    //         if(e.submitter.classList.contains('UPDATE')){
    //             console.log(e.submitter.classList.contains('UPDATE'));
    //             let title = document.getElementById('title').value;
    //                 let author = document.getElementById('author').value;
    //                 let isbn = document.getElementById('isbn').value;
    //                 let image = document.getElementById('image').files;
        
    //                 const mySet = new Set();
        
    //                 mySet.add('image', image[0]);
    //                 mySet.add('title', title); 
    //                 mySet.add('author', author); 
    //                 mySet.add('isbn', isbn);
    //                 let ui = new UI();
    //             ui.updateBooks(e.submitter.getAttribute('_id'));
    //             ui.renderMessage('update', 'warning', 3000);
    //         }
             
    //         // let formdata = new FormData();
    
    //         //     formdata.append('image', image[0]);
    //         //     formdata.append('isbn', isbn);
    //         //     formdata.append('author', author);
    //         //     formdata.append('title', title);
    
    
            
    //         e.preventDefault()
    //     })
    // }


function agregar() {
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
            const book = new Book(title, author , isbn)

            if (title === '' || author === '' || isbn === '') {
                ui.renderMessage('Por favor rellena todos los espacios', 'danger', 3000);
              } else {
                
                ui.addNewBooks(formdata);
                ui.renderMessage('New Book Added Successfully', 'success', 2000);
              }
            // ui.addNewBooks(formdata);
            // ui.renderMessage('New Books Added', 'success', 3000);
            // console.log(title, author, isbn, image);
            // e.preventDefault();
        });
}

function render() {
    document.addEventListener('DOMContentLoaded', () => {
        const ui = new UI();
        ui.renderBooks();
    });
}