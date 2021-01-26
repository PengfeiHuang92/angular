import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    LoginComponent,
    AdminOrdersComponent,
    AdminProductsComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,

    //Angular Firebase
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    //Routering
    RouterModule.forRoot([
      { path:'',component:HomeComponent },
      { path:'products',component:ProductsComponent },
      { path:'shopping-cart',component:ShoppingCartComponent },
      { path:'check-out',component:CheckOutComponent },
      { path:'order-success',component:OrderSuccessComponent },
      { path:'login',component:LoginComponent },
      { path:'my-order',component:MyOrderComponent},
      { path:'admin/products',component:AdminProductsComponent },
      { path:'admin/orders',component:AdminOrdersComponent }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
