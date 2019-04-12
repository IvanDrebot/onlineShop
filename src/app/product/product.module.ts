import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from '../../routing/mainRouting.module';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterComponent } from './filter/filter.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { SingleProductComponent } from './single-product/single-product.component';
import {FormsModule} from '@angular/forms';
import { SelectedProductsComponent } from './selected-products/selected-products.component';
import { SearchProductsComponent } from './search-product/search-products.component';

@NgModule({
  declarations: [
  ProductListComponent,
  FilterComponent,
  ProductGridComponent,
  SingleProductComponent,
  SelectedProductsComponent,
  SearchProductsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ],
  exports: [
    ProductListComponent,
    FilterComponent,
    ProductGridComponent,
    SingleProductComponent
  ]
})
export class ProductModule { }
