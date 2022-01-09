class BookServices {
    constructor() {
        this.URI = 'http://localhost:5000/api/books';
    }
    async getBooks() {
        let response = await fetch(this.URI);
        let books = response.json();
        return books;
    }
    async postBooks(book) {
        let response = await fetch(this.URI, {
            method: 'POST',
            body: book

        });
        let data = response.json()
        console.log(data);
    }
    async deleteBooks(bookId) {
        let response = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE'

        });
        let data = await response.json();
        console.log(data);


    }
}

module.exports = BookServices;