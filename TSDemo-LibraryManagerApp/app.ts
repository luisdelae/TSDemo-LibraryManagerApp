import { Category } from './Modules/enums';
import { IBook, Logger, IAuthor, ILibrarian } from './Modules/interfaces';
import { UniversityLibrarian, ReferenceItem } from './Modules/Classes';
import { CalculateLateFee as CalcFree, MaxBooksAllowed } from './Modules/utilityFunctions';
import refBook from './Modules/Encyclopedia'

let ereference = new refBook('Fact Book', 2016, 1);
let fee = CalcFree(5);
let max = MaxBooksAllowed(12);

function GetAllBooks(): IBook[] {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];

    return books;
}

function LogsFirstAvailable(books = GetAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {

        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total Books: ', numberOfBooks);
    console.log('First Available: ', firstAvailable);
}


function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log('Getting books in category: ', Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles: Array<string> = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles: Array<string>): void {
    for (let title of titles) {
        console.log(title);
    }
}

function GetBookById(id: number): IBook {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function CreatureCustomerId(name: string, id: number): string {
    return name + id;
}


function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log('Creating customer: ', name);

    if (age) {
        console.log('Age: ', age);
    }

    if (city) {
        console.log('City: ', city);
    }
} 

function CheckoutBooks(customer: string, ...bookIds: number[]): Array<string> {

    console.log('Checking out books for ', customer);

    let booksCheckedOut: Array<string> = [];

    for (let id of bookIds) {
        let book = GetBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

function GetTitles(author: string): Array<string>;
function GetTitles(available: boolean): Array<string>;
function GetTitles(bookProperty: any): Array<string> {
    const allBooks = GetAllBooks();
    const foundTitles: Array<string> = [];

    if (typeof bookProperty == 'string') {
        //get all books by a particular author
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean'){
        for (let book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

function PrintBook(book: IBook): void {
    console.log(book.title + ' by ' + book.author);
}

//*********************************************************************************

let Newspaper = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspape: ${this.title}`);
    }
}

let myPaper = new Newspaper('The Gazetter', 2016);
myPaper.printCitation();

class Novel extends class { title: string } {
    mainCharacter: string;
}


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