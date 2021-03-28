import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ViewPaintComponent} from './view-paint/view-paint.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-article', component: ViewPaintComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register',  component: RegisterComponent },
  { path: 'cart',  component: CartComponent },
  { path: 'cart/checkout',  component: CheckoutComponent },
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
