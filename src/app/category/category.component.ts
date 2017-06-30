import { Component, OnInit } from '@angular/core';
import * as books from '../books'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  private books;
  constructor() {
    this.books = books.category;
  }

  ngOnInit() {
  }

  alert(){
    window.alert("Added to cart")
  }

}
