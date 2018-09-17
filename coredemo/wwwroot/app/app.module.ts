import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
// Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend } from "@angular/http";
import { AppComponent } from "./app.component";
import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookService } from './services/book.service';
import { Md2Module } from 'md2';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        BooksComponent,
        NavMenuComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,      
        FormsModule,
        RouterModule.forRoot([
            //{ path: '', redirectTo: '/app', pathMatch: 'full' }
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'books', component: BooksComponent },
            { path: '**', redirectTo: '/home' }
        ])
    ],
    providers: [BookService]

})

export class AppModule {

}

