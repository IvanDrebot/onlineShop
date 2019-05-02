import {Component, OnInit, ViewChild, OnDestroy, Input} from '@angular/core';
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
  @ViewChild('filterCom') filterCom: FilterComponent;

  oSub: Subscription;
  products: Product[] = [];
  count = 0;

  query: any = {
    skip: 0,
    limit: 2,
  };

  reloading = false;

  price: any = {};
  arrayOfPages: any = [];
  filters;

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private filterService: FilterServiceService) {
  }

  ngOnInit() {
    this.reloading = true;
    this.getCategoryId();
    this.getProducerId();
  }

  ngOnDestroy() {
    this.oSub.unsubscribe();
  }

  getAllProduct() {
      this.oSub = this.productService.getAllProduct(this.query).subscribe(res => {
      // @ts-ignore
      this.products = res.products;
      this.getFilterKey(this.products);
        // @ts-ignore
      this.count = res.count;
      this.reloading = false;
    });
  }

  getFilterKey(products) {
    const filters = Object.keys(products[0]);
    filters.splice(0, 4);
    filters.pop();
    this.filterService.subject.next(filters);
  }

  getCategoryId() {
    this.router.queryParams.subscribe((id) => {
      this.query.category = id.category;
      this.getAllProduct();
    });
  }

  getProducerId() {
    this.router.queryParams.subscribe((id) => {
      this.query.producer = id.producer;
      this.getAllProduct();
    });
  }

  // getPrice() {
  //   this.price = this.filterCom.getPrice();
  //   console.log(this.price);
  // }


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

}
