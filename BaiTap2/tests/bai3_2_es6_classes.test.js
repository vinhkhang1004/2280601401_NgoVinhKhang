const { Book, Library, Member } = require('../src/bai3_2_es6_classes');

describe('Bài 3.2: ES6 Classes', () => {
  let lib, book, member;

  beforeEach(() => {
    lib = new Library('City Library');
    book = new Book('Clean Code', 'Robert Martin', '123');
    member = new Member('John', 'M001');
    lib.addBook(book);
  });

  test('Library management', () => {
    expect(lib.findBook('123')).toBe(book);
    expect(lib.getAvailableBooks()).toHaveLength(1);
    
    lib.removeBook('123');
    expect(lib.findBook('123')).toBeUndefined();
  });

  test('Member borrowing flow', () => {
   
    const success = member.borrowBook(book);
    expect(success).toBe(true);
    expect(book.isAvailable).toBe(false);
    expect(member.borrowedBooks).toContain(book);

    const fail = member.borrowBook(book);
    expect(fail).toBe(false);

  
    member.returnBook(book);
    expect(book.isAvailable).toBe(true);
    expect(member.borrowedBooks).toHaveLength(0);
  });
});