import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from './services/card-service';
import { AdminComponent } from './components/admin/admin.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SearchService } from './services/search.service';
import { MovieComponent } from './components/movie/movie.component';
import { UpdateCardComponent } from './components/update-card/update-card.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ErrorComponent } from './components/error/error.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdminComponent,
    MoviesComponent,
    SidenavComponent,
    MovieComponent,
    UpdateCardComponent,
    LoginComponent,
    SignupComponent,
    PaymentComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CardService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
