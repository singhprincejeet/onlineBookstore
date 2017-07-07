/**
 * Created by Princejeet Singh San on 6/13/2017.
 */

import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core'

import {HomeComponent} from "./home/home.component";
import {BookComponent} from "./book/book.component";
import {CategoryComponent} from "./category/category.component";
import {SearchResultComponent} from "./search-result/search-result.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'book', component: BookComponent},
  {path: 'search-result', component: SearchResultComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'checkout', component: CheckoutComponent}
];

export const AppRoutes:ModuleWithProviders = RouterModule.forRoot(appRoutes);

