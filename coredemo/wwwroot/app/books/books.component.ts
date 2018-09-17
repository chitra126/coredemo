import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
    selector: 'books',
    templateUrl: './app/books/books.component.html'
})

export class BooksComponent implements OnInit {

    books: Book[];
    book: Book;
    error: any;

    constructor(private route: Router, private bookService: BookService) {

    }

    getAll() {
        this.bookService.getAll()
            .then(result => this.books = result)
            .catch(error => this.error = error);
    }

    ngOnInit() {
        this.getAll();
    }


}