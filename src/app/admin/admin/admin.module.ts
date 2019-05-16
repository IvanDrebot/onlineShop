import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import {MainRoutingModule} from '../../../routing/mainRouting.module';
import {FormsModule} from '@angular/forms';
import {StatisticComponent} from '../statistic/statistic.component';
import {SingleUpdateComponent} from '../single-update-component/single-update-component';
import {ChangeProducerComponent} from '../change-producer/change-producer.component';
import {AddProducerComponent} from '../add-producer/add-producer.component';
import {OrdersComponent} from '../orders/orders.component';
import {CategoryListComponent} from '../category-list/category-list.component';
import {EditCategoryComponent} from '../edit-category/edit-category.component';

@NgModule({
  declarations: [
    AdminComponent,
    AddProductComponent,
    UpdateProductComponent,
    StatisticComponent,
    SingleUpdateComponent,
    ChangeProducerComponent,
    AddProducerComponent,
    OrdersComponent,
    CategoryListComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ],
  exports: [
    AdminComponent,
    AddProductComponent,
    UpdateProductComponent,
    StatisticComponent,
    SingleUpdateComponent,
    ChangeProducerComponent,
    AddProducerComponent,
    OrdersComponent,
    CategoryListComponent,
    EditCategoryComponent
  ]
})
export class AdminModule { }
