import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FilterServiceService} from '../../../services/filter-service.service';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.css']
})
export class SelectedProductsComponent implements OnInit {

  wishList: Product[] = [];
  emptyList = true;

  constructor(
    private productService: ProductService,
    private filterService: FilterServiceService,
  ) { }

  ngOnInit() {
    this.wishList = JSON.parse(localStorage.getItem('wishList'));
  }

  deleteItem(singleProduct: Product) {
    localStorage.removeItem('wishList');
    console.log(singleProduct);
  }
}
