import {Component, OnInit, ViewChild, OnDestroy, Input, Renderer2} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';
import {ActivatedRoute} from '@angular/router';
import {FilterComponent} from '../filter/filter.component';
import {FilterServiceService} from '../../../services/filter-service.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})

export class ProductGridComponent implements OnInit {
  @ViewChild('filterCom') filterCom: FilterComponent;

  products: Product[] = [];
  count: any;

  query: any = {
    skip: 0,
    limit: 2,
  };

  // filter: any = {};

  arrayOfPages: any = [];

  constructor(
    private productService: ProductService,
    private filterService: FilterServiceService,
    private router: ActivatedRoute,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.getAllProduct(this.query);
    this.getCategoryId();
    this.getCountOfProduct();
  }


  getAllProduct(query) {
    this.productService.getAllProduct(query).subscribe((res) => {
      // @ts-ignore
      this.products = res.products;
      // @ts-ignore
      // this.count = res.count;
      this.filterService.subject.next(this.products[0]);
    });
  }

  getCategoryId() {
    this.router.queryParams.subscribe((id) => {
      this.query.category = id.category;
      this.getAllProduct(this.query);
    });
  }

  getCountOfProduct() {
    this.getCategoryId();
    this.productService.getAllProduct(this.query).subscribe(res => {
      // @ts-ignore
      this.count = res.products.length;
      this.getCountOfPages(this.count);
    });
  }

  getCountOfPages(quntityProduct) {
    const countOfPages = quntityProduct / this.query.limit;
    for (let i = 1; i <= countOfPages; i++) {
      this.arrayOfPages.push(i);
    }
  }

  changePage(page) {
    this.query.limit = 2;
    this.query.skip = this.query.limit * page;
    this.getAllProduct(this.query);
  }

}


// const div = this.renderer.createElement('div');
// this.renderer.addClass(div, 'test-div');
// const newDiv = this.renderer.createElement('div');
// this.renderer.appendChild(div, newDiv);
// this.renderer.appendChild(document.body, div);
// this.renderer.listen(div, 'click', (event) => {
//   console.log(event);
// });
