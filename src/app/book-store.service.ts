import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './shared/book';

@Injectable()
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get('https://book-monkey2-api.angular-buch.com/books')
      .map((rawBooks: any[]) => rawBooks.map(rawBook =>
        new Book(
          rawBook.isbn,
          rawBook.title,
          rawBook.description,
          rawBook.rating)
        )
      );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get(`https://book-monkey2-api.angular-buch.com/book/${isbn}`)
      .map((rawBook: any) =>
        new Book(
          rawBook.isbn,
          rawBook.title,
          rawBook.description,
          rawBook.rating
        )
      );
  }


}
