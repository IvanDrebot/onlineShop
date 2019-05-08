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
    limit: 2,
    skip: 0
  };

  arrayOfPages: any = [];

  constructor(
    private productService: ProductService,
    private filterService: FilterServiceService,
    private router: ActivatedRoute,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.getCategoryId();
  }


  getAllProduct(query) {
    this.productService.getAllProduct(query).subscribe((res) => {
      // @ts-ignore
      const {products, count} = res;
      this.products = products;
      this.count = count;
      this.filterService.subject.next(this.products[0]);
    });
  }

  getCategoryId() {
    this.router.queryParams.subscribe((id) => {
      this.query.q = id;
      this.getAllProduct(this.query);
    });
  }

  // getCountOfPages(count) {
  //   const countOfPages = count / this.limit;
  //   for (let i = 1; i <= countOfPages; i++) {
  //     this.arrayOfPages.push(i);
  //   }
  // }


}




// const div = this.renderer.createElement('div');
// this.renderer.addClass(div, 'test-div');
// const newDiv = this.renderer.createElement('div');
// this.renderer.appendChild(div, newDiv);
// this.renderer.appendChild(document.body, div);
// this.renderer.listen(div, 'click', (event) => {
//   console.log(event);
// });
