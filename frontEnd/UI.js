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