import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from '../../routing/mainRouting.module';
import {ProductListComponent} from './product-list/product-list.component';
import {FilterComponent} from './filter/filter.component';
import {ProductGridComponent} from './product-grid/product-grid.component';
import {SingleProductComponent} from './single-product/single-product.component';
import {FormsModule} from '@angular/forms';
import {WishListComponent} from '../user/wishList/wishList.component';
import {SearchProductsComponent} from './search-product/search-products.component';
import {ClientOrderComponent} from './client-order/client-order.component';

@NgModule({
  declarations: [
    ProductListComponent,
    FilterComponent,
    ProductGridComponent,
    SingleProductComponent,
    SearchProductsComponent,
    ClientOrderComponent
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
    SingleProductComponent,
    SearchProductsComponent,
    ClientOrderComponent
  ]
})
export class ProductModule {
}
