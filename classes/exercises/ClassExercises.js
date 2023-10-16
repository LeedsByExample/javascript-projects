// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
}
// Declare the objects for exercises 2 and 3 here:
let novelOne = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "no");

let manualOne = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, "0000000000000", 1147, 1, 'No');

// Code exercises 4 & 5 here:

/*
Construct three classes that hold the information needed by headquarters as properties. One class should be a Book class and two 
child classes of the Book class called Manual and Novel. Each class will contain two methods. One will be a constructor. 
The other one will either be in charge of disposal of the book or updating the property related to the number of times a book 
has been checked out. Hint: This means you need to read through the requirements for the problem and decide what should 
belong to Book and what should belong to the Novel and Manual classes.
*/