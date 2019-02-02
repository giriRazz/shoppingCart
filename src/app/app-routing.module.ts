import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';


const routes: Routes = [
    { path: "" , component: HomeComponent},
    {path: "about" , component: AboutComponent},
    {path: "cart" , component: CartComponent},
    {path: "login" , component: LoginComponent},
    {path: "register" , component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
