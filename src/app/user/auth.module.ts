import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MainRoutingModule} from '../../routing/main-routing.module';
import {FormsModule} from '@angular/forms';
import {UserInfoComponent} from './user-info/user-info.component';
import {LogoutComponent} from './logout/logout.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserInfoComponent,
    LogoutComponent,
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
    LogoutComponent
  ]
})
export class AuthModule { }
