import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';
import {Producer} from '../../../models/Producer';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  products: Product[] = [];

  query: any = {};
  constructor(private productService: ProductService
  ) { }

  ngOnInit() {
    this.getAllProduct(this.query);
  }

  getAllProduct(query) {
    this.productService.getAllProduct(query).subscribe((product) => {
      this.products = product;
      console.log(product);
    });
  }

}
