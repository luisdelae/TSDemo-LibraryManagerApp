import { ReferenceItem } from './Classes';

export default class Encyclopedia extends ReferenceItem {

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