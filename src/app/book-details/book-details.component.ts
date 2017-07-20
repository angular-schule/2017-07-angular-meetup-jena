import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from './../shared/book';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  book = new Book('', '', '');

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    const isbn = this.route.snapshot.params['isbn'];

    this.bs
      .getSingle(isbn)
      .subscribe(book => this.book = book);
  }

}
