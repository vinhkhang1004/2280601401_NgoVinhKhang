class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(isbn) {
    this.books = this.books.filter(b => b.isbn !== isbn);
  }

  findBook(isbn) {
    return this.books.find(b => b.isbn === isbn);
  }

  getAvailableBooks() {
    return this.books.filter(b => b.isAvailable);
  }
}

class Member {
  constructor(name, memberId) {
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      this.borrowedBooks.push(book);
      return true;
    }
    return false;
  }

  returnBook(book) {
    const index = this.borrowedBooks.findIndex(b => b.isbn === book.isbn);
    if (index !== -1) {
      book.isAvailable = true;
      this.borrowedBooks.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = { Book, Library, Member };