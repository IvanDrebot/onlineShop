import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../app/user/login/login.component';
import {RegisterComponent} from '../app/user/register/register.component';
import {UserInfoComponent} from '../app/user/user-info/user-info.component';
import {LogoutComponent} from '../app/user/logout/logout.component';
import {SingleProductComponent} from '../app/product/single-product/single-product.component';
import {ProductListComponent} from '../app/product/product-list/product-list.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user-info', component: UserInfoComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product/:id', component: SingleProductComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
