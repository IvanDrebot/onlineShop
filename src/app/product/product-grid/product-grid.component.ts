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

  count = 0;

  query: any = {};
  limit = 4;
  skip: any;

  filter: any = {};
  price: any = {};

  arrayOfPages: any = [];

  filters;

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private filterService: FilterServiceService) {
  }

  ngOnInit() {
    this.query.limit = this.limit;
    this.query.skip = 0;
    this.getFilterQuery();
    this.getAllProduct(this.query);
    this.getCountOfPages(this.count);
  }

  getAllProduct(query) {
    this.productService.getAllProduct(this.filter).subscribe(res => {
      // @ts-ignore
      this.products = res.products;
      this.filters = Object.keys(this.products[0]);
      console.log(this.filters);
      // @ts-ignore
      this.count = res.count;
      console.log(this.count);
    });
  }

  getFilterQuery() {
    this.filterService.subject.subscribe((res) => {
      this.filter = res;
      console.log(this.price);
      this.getAllProduct(this.query);
    });
  }

  getCountOfPages(quntityProduct) {
    const countOfPages = quntityProduct / this.limit;
    for (let i = 1; i <= countOfPages; i++) {
      this.arrayOfPages.push(i);
    }
  }

  changePage(page) {
    this.query.limit = this.limit;
    this.query.skip = this.limit * page;
    this.getAllProduct(this.query);
  }

}
