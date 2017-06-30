import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MdToolbarModule, MdButtonModule, MdIconModule, MdIconRegistry, MdInputModule,
  MdSelectModule, MdCardModule, MdTabsModule, MdMenuModule, MdGridListModule, MdCheckboxModule, MdRadioModule, MdDialog,
  MdDialogModule, MdDatepickerModule, MdNativeDateModule
} from '@angular/material'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppRoutes} from "./app.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import { BookComponent } from './book/book.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { CategoryComponent } from './category/category.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    CategoryComponent,
    SearchResultComponent,
    ShoppingCartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdIconModule,
    MdSelectModule,
    MdTabsModule,
    MdMenuModule,
    MdGridListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MdDialogModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    FormsModule,
    BrowserAnimationsModule,
    MdCardModule,
    HttpModule
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
