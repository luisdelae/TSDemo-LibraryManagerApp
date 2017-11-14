function GetAllBooks() {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
}
function LogsFirstAvailable(books = GetAllBooks()) {
    let numberOfBooks = books.length;
    let firstAvailable = '';
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ', numberOfBooks);
    console.log('First Available: ', firstAvailable);
}
var Category;
(function (Category) {
    Category[Category["Bigraphy"] = 0] = "Bigraphy";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
function GetBookTitlesByCategory(categoryFilter = Category.Fiction) {
    console.log('Getting books in category: ', Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitles = [];
    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (let title of titles) {
        console.log(title);
    }
}
function GetBookById(id) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
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
function CheckoutBooks(customer, ...bookIds) {
    console.log('Checking out books for ', customer);
    let booksCheckedOut = [];
    for (let id of bookIds) {
        let book = GetBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
//*********************************************************************************
let myBooks = CheckoutBooks('James', 1, 4, 2);
myBooks.forEach(title => console.log(title));
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
//# sourceMappingURL=app.js.map