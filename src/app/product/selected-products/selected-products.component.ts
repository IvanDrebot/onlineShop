import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FilterServiceService} from '../filter/filter-service.service';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.css']
})
export class SelectedProductsComponent implements OnInit {

  wishList: Product[] = [];

  constructor(
    private productService: ProductService,
    private filterService: FilterServiceService,
  ) { }

  ngOnInit() {
    this.wishList = this.filterService.arrOfProducts;
    // this.filterService.wishList.subscribe(res => {
    //   this.wishList.push(res);
    //   console.log(this.wishList);
    // });
  }

}
