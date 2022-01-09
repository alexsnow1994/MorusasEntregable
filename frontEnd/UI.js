import BookServices from "./services/bookServices";
const bookServices = new BookServices();
import {format} from 'timeago.js'

class UI {

    async renderBooks() {
        let books = await bookServices.getBooks();
        let booksCardsContainer = document.getElementById('books-cards');
        booksCardsContainer.innerHTML = '';
        books.forEach(book => {
            let div = document.createElement('div');
            div.className = '';
            div.innerHTML = `
             <div class="cards m-2">
                <div class="row">
                    <div class="col-md-4>
                    <img src="http://localhost:5000${book.imagePath}" alt="" class="img-fluid"/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-block p-2">
                        <h4 class="card-title">"${book.title}"</h4>
                        <p class="card-text">"${book.author}"</p>
                        <a href=# class="bt btn-danger delete" _id="${book._id}">x</a>  
                    </div>
                    </div>
                    
                </div>
                <div class="card-footer">
                    ${format(book.created_at)}
                    </div>
             </div>
            `;
            booksCardsContainer.appendChild(div);
        })
        
    };
    async addNewBooks(book) {
        await bookServices.postBooks(book);
        this.clearBooksForm();
        this.renderBooks();
    };

    async clearBooksForm() {
        document.getElementById('book-form').reset();
    };

    // async renderMessage(message, colorMessage, secondsToRemove) {
    //     let div = document.createElement('div');
    //     div.className= `alert alert- ${colorMessage} message ` ;
    //     div.appendChild(document.createTextNode(message));

    //     let container = document.querySelector('.col-md-4')
    //     let bookForm= document.querySelector('#book-form');

    //     container.insertBefore(div, bookForm);

    //     setTimeout(()=> {
    //         document.querySelector('.message').remove
    //     } , secondsToRemove)
    // };
    async deleteBook(bookId) {
        await bookServices.deleteBooks(bookId)
        this.renderBooks();
    };

}

export default UI;