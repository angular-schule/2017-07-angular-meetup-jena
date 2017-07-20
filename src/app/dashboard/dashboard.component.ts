import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];
  title: string;
  url = 'http://angular.schule';

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Zurück in die Zukunft', 5),
      new Book('111', 'AngularJS 1.x', 'Oldie but goldie', 3)
    ];

    this.title = 'jenadevs';
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }

}
