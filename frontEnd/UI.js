import BookServices from "./services/bookServices";
const bookServices = new BookServices();

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
                    <img src="${book.imagePath}" alt="" class="img-fluid"/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-block px-2">
                        <h4 class="card-title">"${book.title}"</h4>
                        <p class="card-text">"${book.author}}"</p>
                        <a href=# class="bt btn-danger delete"></a>  
                    </div>
                    </div>
                </div>
             </div>
            `;
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