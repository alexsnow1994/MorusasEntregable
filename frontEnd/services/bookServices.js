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
    async updateBooks(bookId, book){
        // let object = {}
        // let imagePath = ''
        // book.forEach((value, key) => {
        //     if(key == 'image'){

        //         console.log(value, key);
        //         imagePath = `/uploads/${value.lastModified}.png`
        //         console.log(`/uploads/${value.lastModified}.png`);
        //     }
        //     object[key] = value
        // });
        // object['imagePath'] = imagePath
        // const json = JSON.stringify(object)
        // console.log(json);
        let response = await fetch(`${this.URID}${bookId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: book
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