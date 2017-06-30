import { Component, OnInit } from '@angular/core';
import * as books from '../books'
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
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
