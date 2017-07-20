import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from './../shared/book';
import 'rxjs/add/operator/map';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  book = new Book('', '', '');

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const isbn = this.route.snapshot.params['isbn'];

    this.http.get(`https://book-monkey2-api.angular-buch.com/book/${isbn}`)
      .map((rawBook: any) =>
            new Book(
              rawBook.isbn,
              rawBook.title,
              rawBook.description,
              rawBook.rating)
        )
      .subscribe(data => this.book = data);
  }

}
