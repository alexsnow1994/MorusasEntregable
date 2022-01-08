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
                    <a href="http://localhost:5000${book.imagePath}"><img src='http://localhost:5000${book.imagePath}' alt="" class="img-fluid"></a>
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
            booksCardsContainer.appendChild(div)
        })
        
    };
    async addNewBooks(book) {
        await bookServices.postBooks(book);
        this.clearBooksForm();
    };

    async clearBooksForm() {
        document.getElementById('book-form').reset()
    };

    async renderMessage() {

    };
    async delateBook() {

    };

}

export default UI;