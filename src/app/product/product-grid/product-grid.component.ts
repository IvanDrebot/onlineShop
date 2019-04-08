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

  // products: Product[] = [];
  // query: any = {};
  // limit = 4;
  // skip: any;
  // countOfProducts: any;
  // arrayOfPages: any = [];

  // constructor(
  //   private productService: ProductService,
  //   private router: ActivatedRoute
  // ) { }

  // ngOnInit() {
    // this.getCountOfProduct(this.query);
    // this.query.limit = this.limit;
    // this.query.skip = 0;
    // this.getAllProduct(this.query);
    // console.log(this.query);
  // }
  //
  // getAllProduct(query) {
  //   this.productService.getAllProduct(query).subscribe((product) => {
  //     this.products = product;
  //   });
  // }
  //
  // getCountOfProduct(query) {
  //   this.productService.getAllProduct(query).subscribe((products) => {
  //     this.countOfProducts = products.length;
  //     this.getCountOfPages(products.length);
  //   });
  // }
  //
  // getCountOfPages(quntityProduct) {
  //   const countOfPages = quntityProduct / this.limit;
  //   for (let i = 1; i <= countOfPages; i++) {
  //     this.arrayOfPages.push(i);
  //   }
  // }
  //
  // changePage(page) {
  //   this.query.limit = this.limit;
  //   this.query.skip = this.limit * page;
  //   this.getAllProduct(this.query);
  // }


  someData: any;
  products: Product[] = [];
  countOfProducts: any;
  query: any;

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private filterService: FilterServiceService
  ) { }

  ngOnInit(): void {
    this.getAllProduct(this.query);
    this.filterService.subject.subscribe((res) => {
      this.someData = res;
      this.log();
    });
  }
   log() {
   console.log(this.someData);
 }

  getAllProduct(query) {
    this.productService.getAllProduct(query).subscribe((product) => {
      this.products = product;
      this.countOfProducts = product.length;
      console.log(this.countOfProducts);
      // this.getCountOfPages(product.length);
    });
  }
}
