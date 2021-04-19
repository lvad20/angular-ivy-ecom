import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryModuleComponent } from './category-module/category-module.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   
    WelcomeComponent,
   
    FooterComponent,
   
    CategoryComponent,
   
    CategoryCardComponent,
   
    CategoryModuleComponent,
   
    ProductcardComponent,
   
    ProductgridComponent,
   
    ProductlistComponent,
   
    ProductListComponent,
   
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
