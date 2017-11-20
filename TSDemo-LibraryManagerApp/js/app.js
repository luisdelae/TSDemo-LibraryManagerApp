"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./Modules/enums");
var _ = require("lodash");
var snakecaseTitle = _.snakeCase('For Whom the Bell Tolls');
console.log(snakecaseTitle);
//let ereference = new refBook('Fact Book', 2016, 1);
//let fee = CalcFree(5);
//let max = MaxBooksAllowed(12);
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function LogsFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ', numberOfBooks);
    console.log('First Available: ', firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log('Getting books in category: ', enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreatureCustomerId(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('Creating customer: ', name);
    if (age) {
        console.log('Age: ', age);
    }
    if (city) {
        console.log('City: ', city);
    }
}
function CheckoutBooks(customer) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for ', customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIds_1 = bookIds; _a < bookIds_1.length; _a++) {
        var id = bookIds_1[_a];
        var book = GetBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        //get all books by a particular author
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
//*********************************************************************************
//let inventory: Array<IBook> = [
//    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//    { id: 10, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//    { id: 10, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//    { id: 10, title: 'Cool authoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
//];
//let bookShelf: Shelf<IBook> = new Shelf<IBook>();
//inventory.forEach(book => bookShelf.add(book));
//let firstBook: IBook = bookShelf.getFirst();
//let magazines: Array <IMagazine> = [
//    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//    { title: 'Literary Fiction Quaretly', publisher: 'College Press' },
//    { title: 'Five Points', publisher: 'GSU' }
//]
//let magazineShelf: Shelf<IMagazine> = new Shelf<IMagazine>();
//magazines.forEach(mag => magazineShelf.add(mag));
//let firstMagazine: IMagazine = magazineShelf.getFirst();
//magazineShelf.printTitles();
//let softwareBook = bookShelf.find('Code Complete');
//console.log(`${softwareBook.title} (${softwareBook.author})`);
//let purgedBooks: Array<IBook> = Purge<IBook>(inventory);
//purgedBooks.forEach(book => console.log(book.title));
//let purgedNums: Array<number> = Purge<number>([1, 2, 3, 4]);
//console.log(purgedNums);
//let Newspaper = class extends ReferenceItem {
//    printCitation(): void {
//        console.log(`Newspape: ${this.title}`);
//    }
//}
//let myPaper = new Newspaper('The Gazetter', 2016);
//myPaper.printCitation();
//class Novel extends class { title: string } {
//    mainCharacter: string;
//}
//let refBoook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
//refBoook.printCitation();
//let ref: ReferenceItem = new ReferenceItem('New Facts and Figures', 2016);
//ref.printItem();
//ref.publisher = 'Random Data Publishing';
//console.log(ref.publisher);
//let favoriteLibrarian: ILibrarian = new UniversityLibrarian();
//favoriteLibrarian.name = 'Sharon';
//favoriteLibrarian.assistCustomer('Lynda');
//Duck Typing:
//let myBook: IBook = {
//    id: 5,
//    title: 'Pride and Prejudice',
//    author: 'Jane Austen',
//    available: true,
//    category: Category.Fiction,
//    pages: 250,
//    markDamaged: (reason: string) => console.log('Damaged: ', reason)
//    //year: '1813',
//    //copies: 3
//};
//PrintBook(myBook);
//myBook.markDamaged('torn pages');
//let logDamage: IDamageLogger;
//logDamage = (damage: string) => console.log('Damage report: ', damage);
//logDamage('coffee stains');
//let hermansBooks = GetTitles('Herman Melville');
//hermansBooks.forEach(title => console.log(title));
//let checkedOytBooks = GetTitles(false);
//checkedOytBooks.forEach(title => console.log(title));
//let myBooks: Array<string> = CheckoutBooks('James', 1, 4, 2);
//myBooks.forEach(title => console.log(title));
//LogsFirstAvailable();
//let fictionBooks = GetBookTitlesByCategory();
//fictionBooks.forEach(title => console.log(title));
//CreateCustomer('Luis');
//CreateCustomer('Luis', 27);
//CreateCustomer('Luis', 27, 'SomeCity');
//let x: number;
//x = 5;
//let IdGenerator: (chars: string, numbs: number) => string;
//IdGenerator = (name: string, id: number) => { return id + name; }
//let myId: string = IdGenerator('Danel ', 15);
//console.log(myId);
//const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
//fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val)); 
