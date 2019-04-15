import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';
import {ActivatedRoute} from '@angular/router';
import {FilterComponent} from '../filter/filter.component';
import {FilterServiceService} from '../filter/filter-service.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  @ViewChild('filterCompn') filterCompn: FilterComponent;

  products: Product[] = [];
  query: any = {};
  limit = 4;
  skip: any;
  countOfProducts: any;
  arrayOfPages: any = [];

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private filterService: FilterServiceService
  ) {
  }

  ngOnInit() {
    this.getFilteredProduct();
    this.getCountOfProduct();
    this.query.limit = this.limit;
    this.query.skip = 0;
    this.getAllProduct(this.query);
  }

  getFilteredProduct() {
    this.filterService.subject.subscribe((res) => {
      this.products = res;
      this.countOfProducts = res.length;
    });
  }

  getAllProduct(query) {
    this.productService.getAllProduct(query).subscribe((product) => {
      this.products = product;
    });
  }

  getCountOfProduct() {
      this.productService.getAllProduct(this.query).subscribe((products) => {
      this.countOfProducts = products.length;
      this.getCountOfPages(products.length);
    });
  }

  getCountOfPages(quntityProduct) {
    const countOfPages = quntityProduct / this.limit;
    for (let i = 0; i <= countOfPages; i++) {
      this.arrayOfPages.push(i);
    }
  }

  changePage(page) {
    this.query.limit = this.limit;
    this.query.skip = this.limit * page;
    this.getAllProduct(this.query);
  }
}
