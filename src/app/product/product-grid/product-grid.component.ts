import {Component, OnInit, ViewChild, OnDestroy, Input, Renderer2} from '@angular/core';
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
    private router: ActivatedRoute,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.getCategoryId();
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'test-div');
    const newDiv = this.renderer.createElement('div');
    this.renderer.appendChild(div, newDiv);
    this.renderer.appendChild(document.body, div);
    this.renderer.listen(div, 'click', (event) => {
      console.log(event);
    });
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
      console.log(this.count);

      this.filterService.subject.next(this.products[0]);
    });
  }

  getCategoryId() {
    this.router.queryParams.subscribe((id) => {
      this.query.category = id.category;
      this.getAllProduct();
    });
  }

  getCountOfPages(quntityProduct) {
    const countOfPages = quntityProduct / this.query.limit;
    for (let i = 1; i <= countOfPages; i++) {
      this.arrayOfPages.push(i);
    }
    console.log(this.arrayOfPages);
  }

  changePage(page) {
    this.query.skip = this.query.limit * page;
    this.getAllProduct();
  }



  // loadMore() {
  //   this.query.skip += 2;
  //   this.loading = true;
  //   this.getAllProduct();
  // }

}
