import { IBook, IDamageLogger, IAuthor, ILibrarian } from './interfaces';

class UniversityLibrarian implements ILibrarian {
    name: string;
    email: string;
    derpartment: string;

    assistCustomer(custName: string): void {
        console.log(this.name + ' is assisting ' + custName);
    }
}

abstract class ReferenceItem {
    private _publisher: string;
    static department: string = 'Research';

    constructor(
        public title: string,
        protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`); 
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    //Different types of books required different citations
    //Forces subclasses to provide implementation
    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {

    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    printItem(): void {
        //This calls the original printItem from the inherited class
        //Don't actually need this is you only want to override it
        super.printItem();
        //This adds functionality to printItem for this class only
        console.log(`Edtion: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

export { UniversityLibrarian, ReferenceItem, Encyclopedia };