class bookServices{
    constructor(){
        this.URI ('http://localhost:5000/api/books')
    }
     async getBook (){
        let response = await fetch(this.URI);
        let books =response.json();
        return books;
    };
    postBook (book){
        let response = await fetch(this.URI, {
            method: 'POST',
            body: 'book'
        });
        let data = response.json();
        return data;
        
    };
    deletBook(bookId){
        let response = await fetch( this.URI,{
            method: 'DELATE',
            body: 'book'
        });
        let data = response.json();
        return data;
    };
};

// class UserServices {
//     constructor(){
//         this
//     }
// }