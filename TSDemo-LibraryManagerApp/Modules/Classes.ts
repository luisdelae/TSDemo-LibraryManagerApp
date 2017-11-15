﻿import { IBook, IDamageLogger, IAuthor, ILibrarian } from './interfaces';

class UniversityLibrarian implements ILibrarian {
    name: string;
    email: string;
    derpartment: string;

    assistCustomer(custName: string): void {
        console.log(this.name + ' is assisting ' + custName);
    }
}

export { UniversityLibrarian };