"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CalculateLateFee(daysLate) {
    return daysLate * .25;
}
exports.CalculateLateFee = CalculateLateFee;
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.MaxBooksAllowed = MaxBooksAllowed;
//This function cannot be called outside of the namespac, only inside,
function privateFunc() {
    console.log('This is private...');
}
//Type must be the same when passed in and returned
function Purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
