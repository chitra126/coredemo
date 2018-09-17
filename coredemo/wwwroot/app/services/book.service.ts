import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Book } from '../models/book';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {

    private _bookStoreApi = 'api/Books';

    constructor(private http: Http) { }

    getAll(): Promise<Book[]> {
        return this.http.get(this._bookStoreApi)
            .toPromise()
            .then(response => response.json())
            .catch(error => Promise.reject(error.message || error));

    }
}