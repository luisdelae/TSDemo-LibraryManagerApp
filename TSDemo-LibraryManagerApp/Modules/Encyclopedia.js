"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Classes_1 = require("./Classes");
class Encyclopedia extends Classes_1.ReferenceItem {
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
    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}
exports.default = Encyclopedia;
//# sourceMappingURL=Encyclopedia.js.map