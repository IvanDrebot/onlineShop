import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  products: Product[] = [];
  query: any = {};
  queryWithFilter = {category: 'Phones'};
  limit = 4;
  skip: any;
  countOfProducts: any;
  arrayOfPages: any = [];

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCountOfProduct(this.queryWithFilter);
    this.query.limit = this.limit;
    this.query.skip = 0;
    this.getAllProduct(this.query);
  }

  getAllProduct(query) {
    this.productService.getAllProduct(query).subscribe((product) => {
      this.products = product;
      // console.log(product);
    });
  }

  getCountOfPages(quntityProduct) {
    const countOfPages = quntityProduct / this.limit;
    for (let i = 1; i <= countOfPages; i++) {
      this.arrayOfPages.push(i);
    }
  }

  getCountOfProduct(queryWithFilter) {
    this.productService.getAllProduct(queryWithFilter).subscribe((products) => {
      this.countOfProducts = products.length;
      this.getCountOfPages(products.length);
    });
  }
  changePage(page) {
    this.query.limit = this.limit;
    this.query.skip = this.limit * page;
    this.getAllProduct(this.query);
  }

}
