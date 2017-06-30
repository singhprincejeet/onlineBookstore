import { Component, OnInit } from '@angular/core';
import * as books from '../books';
import {bestsellingBooks, recommendedBooks} from "../books";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  private bestsellingBooks;
  private recommendedBooks;
  private routerObj;
  constructor(router: Router) {
    this.recommendedBooks = books.recommendedBooks;
    this.bestsellingBooks = books.bestsellingBooks;
    this.routerObj = router;
  }

  ngOnInit() {
  }

  alert(){
    window.alert("Added to cart")
  }

}
