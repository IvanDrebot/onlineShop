import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MainRoutingModule} from '../../routing/mainRouting.module';
import {FormsModule} from '@angular/forms';
import {UserInfoComponent} from './user-info/user-info.component';
import {LogoutComponent} from './logout/logout.component';
import {ViewedProductsComponent} from './viewed-products/viewed-products.component';
import {OrderingComponent} from './ordering/ordering.component';
import {WishListComponent} from './wishList/wishList.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserInfoComponent,
    LogoutComponent,
    ViewedProductsComponent,
    OrderingComponent,
    WishListComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    UserInfoComponent,
    LogoutComponent,
    ViewedProductsComponent,
    OrderingComponent,
    WishListComponent
  ]
})
export class ClientUserModule {

}
