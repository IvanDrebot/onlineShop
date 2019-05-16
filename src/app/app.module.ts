import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MainRoutingModule} from '../routing/mainRouting.module';
import {AuthModule} from './user/auth.module';
import {ProductModule} from './product/product.module';
import {AdminModule} from './admin/admin/admin.module';
import { CategoryFieldComponent } from './admin/category-field/category-field.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MainRoutingModule,
    AuthModule,
    ProductModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
