import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ProductList } from "./shop/productList.component";
import { DataService } from "./shared/dataService";
import { Cart } from "./shop/cart.component";

@NgModule({
  declarations: [
      AppComponent,
      ProductList,
      Cart
  ],
  imports: [
      BrowserModule,
      HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
