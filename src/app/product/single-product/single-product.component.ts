import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../services/dataService';
import {ConfigService} from '../../../services/config.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})

export class SingleProductComponent implements OnInit {

  id = this.router.snapshot.params.id;
  singleProduct;
  wishList: any = [];
  count = 1;
  input;

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private routes: Router,
    private configService: ConfigService,
    private appComp: AppComponent,
    private nextService: DataService
  ) {
  }

  ngOnInit() {
    this.getProductById(this.id);
  }

  getProductById(id) {
    id = this.router.snapshot.params.id;
    this.productService.getProductById(id).subscribe((singleProduct) => {
      this.singleProduct = singleProduct;
      this.singleProduct.description = JSON.parse(this.singleProduct.description);
    });
  }

  addProductToCart() {
    this.appComp.wishList++;
    if (localStorage.getItem('wishList')) {
      this.wishList = JSON.parse(localStorage.getItem('wishList'));
      this.wishList.push(this.singleProduct);
      localStorage.setItem('wishList', JSON.stringify(this.wishList));
    } else {
      this.wishList.push(this.singleProduct);
      localStorage.setItem('wishList', JSON.stringify(this.wishList));
    }
  }

  increment() {
    this.count++;
    this.input = document.getElementById('input');
    this.input.value = this.count;
  }

  decrement() {
    if (this.count === 1) {
      this.count = 1;
    } else {
      this.count--;
    }
    this.input.value = this.count;
  }

  makeOrder() {
    this.singleProduct.count = this.count;
    const {price, brand, count, category} = this.singleProduct;
    const order = {price, brand, category, count};
    this.nextService.product.next(order);
    this.routes.navigate([`${'/order/'}${this.singleProduct._id}`]);
  }
}
