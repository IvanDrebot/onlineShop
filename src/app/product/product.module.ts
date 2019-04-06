import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from '../../routing/mainRouting.module';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterComponent } from './filter/filter.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { SingleProductComponent } from './single-product/single-product.component';

@NgModule({
  declarations: [
  ProductListComponent,
  FilterComponent,
  ProductGridComponent,
  SingleProductComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    ProductListComponent,
    FilterComponent,
    ProductGridComponent,
    SingleProductComponent
  ]
})
export class ProductModule { }
