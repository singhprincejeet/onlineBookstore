import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'BookStore';
  private menu = ["Non Fiction", "Fantasy", "AutoBiography", "Humor", "Adult", "Science",
    "History", "Poetry", "Feminism", "Thriller", "Children"];
  constructor(private router:Router){
  }
}
