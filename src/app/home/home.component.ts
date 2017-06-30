import { Component, OnInit } from '@angular/core';
import * as books from '../books'
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private recommendedBooks;
  private latestBooks;
  private bestsellingBooks;
  constructor() {
    this.recommendedBooks = books.recommendedBooks;
    this.latestBooks = books.latestBooks;
    this.bestsellingBooks = books.bestsellingBooks;
  }

  ngOnInit() {
  }

  alert(){
    window.alert("Added to cart")
  }

}
