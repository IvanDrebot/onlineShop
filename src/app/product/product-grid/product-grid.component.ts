import {Component, OnInit, ViewChild, OnDestroy, Input} from '@angular/core';
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
  @ViewChild('filterCom') filterCom: FilterComponent;

  products: Product[] = [];
  count = 0;

  query: any = {
    skip: 0,
    limit: 6,
  };

  price: any = {};
  arrayOfPages: any = [];
  filtersKey: any;

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

  // ngOnDestroy() {
  //   this.oSub.unsubscribe();
  // }

  getAllProduct() {
      this.productService.getAllProduct(this.query).subscribe(res => {
      // @ts-ignore
      this.products = res.products;
      console.log(res);
      // @ts-ignore
      this.count = res.count;
      this.getFilterKey(this.products[0]);
    });
  }

  getFilterKey(product) {
    for (const f in product) {
        if (product[f] === null || product[f] === '') {
          delete product[f];
        }
      }
    this.filtersKey = Object.keys(product);
    this.filtersKey.splice(0, 4);
    this.filtersKey.pop();
    this.filterService.subject.next(this.filtersKey);
    console.log(this.filtersKey);
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
