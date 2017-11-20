import * as Interfaces from './interfaces';

class UniversityLibrarian implements Interfaces.ILibrarian {
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

export { UniversityLibrarian, ReferenceItem };