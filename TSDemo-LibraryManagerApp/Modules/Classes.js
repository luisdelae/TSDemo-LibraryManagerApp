"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UniversityLibrarian {
    assistCustomer(custName) {
        console.log(this.name + ' is assisting ' + custName);
    }
}
exports.UniversityLibrarian = UniversityLibrarian;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
}
ReferenceItem.department = 'Research';
exports.ReferenceItem = ReferenceItem;
class Encyclopedia extends ReferenceItem {
    constructor(newTitle, newYear, edition) {
        super(newTitle, newYear);
        this.edition = edition;
    }
    printItem() {
        //This calls the original printItem from the inherited class
        //Don't actually need this is you only want to override it
        super.printItem();
        //This adds functionality to printItem for this class only
        console.log(`Edtion: ${this.edition} (${this.year})`);
    }
}
exports.Encyclopedia = Encyclopedia;
//# sourceMappingURL=Classes.js.map