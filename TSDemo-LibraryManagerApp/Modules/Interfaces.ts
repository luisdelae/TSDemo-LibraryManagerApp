﻿import { Category } from './enums';

interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: IDamageLogger;
}

interface IDamageLogger {
    (reson: string): void;
}

interface IPerson {
    name: string;
    email: string;
}

interface IAuthor extends IPerson {
    numBooksPublished: number;
}

interface ILibrarian extends IPerson {
    derpartment: string;
    assistCustomer: (custName: string) => void;
}

export { IBook, IDamageLogger, IAuthor, ILibrarian };