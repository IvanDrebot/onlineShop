import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../app/user/login/login.component';
import {RegisterComponent} from '../app/user/register/register.component';
import {UserInfoComponent} from '../app/user/user-info/user-info.component';
import {LogoutComponent} from '../app/user/logout/logout.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user-info', component: UserInfoComponent},
  {path: 'logout', component: LogoutComponent},
  // {path: 'phones', component: PhonesComponent},
  // {path: 'phones/:id', component: DetailsPhoneComponent},
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
