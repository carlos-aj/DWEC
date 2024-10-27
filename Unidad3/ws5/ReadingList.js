class Book{
    constructor(title, genre, author){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.readDate = null;
    }
}

class BookList extends Book{
    constructor(){
        this.readed = 0;
        this.nReaded = 0;
        this.nextBook = null;
        this.currentBook = null;
        this.lastBook = null;
        this.allBooks = [];
    }

    add(book){
        this.allBooks.push(book);
        if(book.read == false){
            this.nReaded++;
        }else{
            this.readed++;
        }
    }

    finishCurrentBook(){
        this.currentBook.read = true;
        this.currentBook.readDate = Date.now();
        this.lastBook = this.currentBook;
        this.readed++
        this.nextBook = allBooks.find(book => !book.readed);
        this.currentBook = this.nextBook;

    }
}


