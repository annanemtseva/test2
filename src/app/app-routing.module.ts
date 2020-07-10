import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {UserItemPageComponent} from './user-item-page/user-item-page.component';
import {UsersListPageComponent} from './users-list-page/users-list-page.component';


const routes: Routes = [
  {
    path: '', component: MainPageComponent},
  {path: 'users', component: UsersListPageComponent},
  {path: 'user/:userFirstName/:id', component: UserItemPageComponent},
  // {path: 'error', component: ErrorPageComponent},
  // {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
