import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'products',component: ProductListComponent },
    // { path: 'products/:id', component: ProductComponent }
];
@NgModule({
    imports: [BrowserModule, FormsModule,
   routing, CategoryModule],
    declarations: [AppComponent, NavbarComponent],
    bootstrap: [AppComponent]
   });
export class AppModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';




