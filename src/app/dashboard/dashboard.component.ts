import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from '../shared/book';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books$: Observable<Book[]>;
  url = 'http://angular.schule';

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.books$ = this.bs.getAll();
  }

  reorderBooks(book: Book) {
    // this.books.sort((a, b) => b.rating - a.rating);
  }

}
