import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieComponent } from './components/movie/movie.component';

import { MoviesComponent } from './components/movies/movies.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateCardComponent } from './components/update-card/update-card.component';
import { AdminGuard } from './gaurds/admin.guard';
import { UserGuard } from './gaurds/user.guard';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component:HomeComponent},
  { path: 'admin', component:AdminComponent, canActivate:[AdminGuard]},
  { path: 'movies', component:MoviesComponent, canActivate:[UserGuard]},
  { path: 'movie', component:MovieComponent, canActivate:[UserGuard]},
  { path: 'updateCard', component:UpdateCardComponent,  canActivate:[AdminGuard]},
  { path: 'signup', component:SignupComponent},
  { path: 'login', component:LoginComponent},
  { path: 'payment', component:PaymentComponent},
  { path: '**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
