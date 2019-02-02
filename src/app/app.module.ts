import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpHandler
} from "@angular/common/http";
import { HomeComponent } from "./components/home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { CartComponent } from "./components/cart/cart.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./users/login/login.component";
import { RegisterComponent } from "./users/register/register.component";
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormsModule
} from "@angular/forms";
import { UserService } from "./users/user.service";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
