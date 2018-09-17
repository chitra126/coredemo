import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
    selector: 'book-form',
    templateUrl: './book-form.component.html'
})

export class BookFormComponent implements OnInit {

    @Input() book: Book;
    updateMode = false;
    error: any;

    constructor(private bookService: BookService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        //this.getAll();
    }



}