import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {FilterServiceService} from '../../../services/filter-service.service';
import {Product} from '../../../models/Product';
import {ConfigService} from '../../../services/config.service';
import {AdminService} from '../../../services/admin.service';
import {OrderService} from '../../../services/order.service';
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
    private configService: ConfigService,
    private appComp: AppComponent
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

  deincrement() {
    if (this.count === 1) {
      this.count = 1;
    } else {
      this.count--;
    }
    this.input.value = this.count;
  }
}
