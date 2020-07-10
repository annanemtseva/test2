import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwPaginationComponent } from 'jw-angular-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UsersListPageComponent } from './users-list-page/users-list-page.component';
import { UserItemPageComponent } from './user-item-page/user-item-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UsersListPageComponent,
    UserItemPageComponent,
    JwPaginationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
