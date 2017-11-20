
export function CalculateLateFee(daysLate: number): number {
    return daysLate * .25;
}
    

export function MaxBooksAllowed(age: number): number {
    if (age < 12) {
        return 3;
    } else {
        return 10;
    }
}

//This function cannot be called outside of the namespac, only inside,
function privateFunc(): void {
    console.log('This is private...');
}