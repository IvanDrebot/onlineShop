import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import {MainRoutingModule} from '../../../routing/mainRouting.module';
import {FormsModule} from '@angular/forms';
import {StatisticComponent} from '../statistic/statistic.component';

@NgModule({
  declarations: [
    AdminComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    StatisticComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ],
  exports: [
    AdminComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    StatisticComponent
  ]
})
export class AdminModule { }
