import {Component, OnInit, ViewChild, OnDestroy, Input, Renderer2} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';
import {ActivatedRoute} from '@angular/router';
import {FilterComponent} from '../filter/filter.component';
import {DataService} from '../../../services/dataService';
import {ConfigService} from '../../../services/config.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})

export class ProductGridComponent implements OnInit {
  @ViewChild('filterCom') filterCom: FilterComponent;

  products: any = [];

  query: any = {
    limit: 3,
    skip: 0
  };

  indexPage: any = null;


  constructor(
    private productService: ProductService,
    private dataService: DataService,
    private configService: ConfigService,
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
      console.log(res);
      this.products = products;
      this.dataService.subject.next(this.products);
    });
  }


  getCategoryId() {
    this.router.queryParams.subscribe((id) => {
      if (id) {
        this.query.q = id;
        this.getAllProduct(this.query);
      }
    });
  }

  nextPage(number) {
    this.query.skip += number;
    this.getAllProduct(this.query);
  }

  previousPage(number) {
    this.query.skip += number;
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
