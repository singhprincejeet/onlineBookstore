import { Component, OnInit } from '@angular/core';
import * as books from '../books'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  private books;
  private recommendedBooks;
  constructor() {
    this.books = books.category;
    this.recommendedBooks = books.recommendedBooks;
  }

  ngOnInit() {
  }

  alert(){
    window.alert("Added to cart")
  }

}
