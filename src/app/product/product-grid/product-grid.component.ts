import {Component, OnInit, ViewChild, OnDestroy, Input} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';
import {ActivatedRoute} from '@angular/router';
import {FilterComponent} from '../filter/filter.component';
import {FilterServiceService} from '../../../services/filter-service.service';
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

  arrayOfPages: any = [];
  loading = true;

  constructor(
    private productService: ProductService,
    private filterService: FilterServiceService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCategoryId();
  }

  ngOnDestroy() {
    this.oSub.unsubscribe();
  }


  getAllProduct() {
    this.oSub = this.productService.getAllProduct(this.query).subscribe((res) => {
      // @ts-ignore
      this.products = res.products;
      this.loading = false;
      // @ts-ignore
      this.count = res.count;
      this.filterService.subject.next(this.products[0]);
    });
  }

  getCategoryId() {
    this.router.queryParams.subscribe((id) => {
      this.query.category = id.category;
      this.getAllProduct();
    });
  }

  loadMore() {
    this.query.skip += 2;
    this.loading = true;
    this.getAllProduct();
  }

  getCountOfPages(quntityProduct) {
    const countOfPages = quntityProduct / this.query.limit;
    for (let i = 1; i <= countOfPages; i++) {
      this.arrayOfPages.push(i);
    }
  }

  // changePage(page) {
  //   this.query.skip = this.query.limit * page;
  //   this.getAllProduct();
  // }

}
