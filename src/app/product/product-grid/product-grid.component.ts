import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';
import {ActivatedRoute} from '@angular/router';
import {FilterComponent} from '../filter/filter.component';
import {FilterServiceService} from '../filter/filter-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit, OnDestroy {
  @ViewChild('filterCompn') filterCompn: FilterComponent;

  oSub: Subscription;
  products: Product[] = [];
  count = 0;

  query: any = {
    skip: 0,
    limit: 3,
  };

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
    this.getCategoryId();
    this.getProducerId();
    this.getAllProduct();
  }

  ngOnDestroy() {
    this.oSub.unsubscribe();
  }

  getAllProduct() {
      this.oSub = this.productService.getAllProduct(this.filter).subscribe(res => {
      // @ts-ignore
      this.products = res.products;
      this.filters = Object.keys(this.products[0]);
      // @ts-ignore
      this.count = res.count;
      console.log(this.count, this.products);
    });
  }

  getCategoryId() {
    this.router.queryParams.subscribe((id) => {
      this.filter = id;
      this.getAllProduct();
    });
  }

  getProducerId() {
    this.router.queryParams.subscribe((id) => {
      this.filter = id;
      this.getAllProduct();
    });
  }

  // getCountOfPages(quntityProduct) {
  //   const countOfPages = quntityProduct / this.limit;
  //   for (let i = 1; i <= countOfPages; i++) {
  //     this.arrayOfPages.push(i);
  //   }
  // }

  // changePage(page) {
  //   this.query.limit = this.limit;
  //   this.query.skip = this.limit * page;
  //   this.getAllProduct(this.query);
  // }

  // loadMore() {
  //   this.query.skip += 2;
  //   this.getAllProduct();
  // }
}
