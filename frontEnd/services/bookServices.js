class BookServices {
    constructor() {
        this.URI = 'http://localhost:5000/api/books';
        this.URID = 'http://localhost:5000/api/books/'
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
        //return data;
    }
    async updateBooks(bookId){
        let response = await fetch(`${this.URID}${bookId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: bookId
        });
        let data = await response.json();
        return data();
        console.log(data);
    };

    async deleteBooks(bookId) {
        let response = await fetch(`${this.URID}${bookId}`, {
            headers: {
                'Content-Type': 'application/json',
                //'Accept': 'application/json'
            },
            method: 'DELETE'

        });
        let data = await response.json();
        console.log(data);


    }
}

export default BookServices