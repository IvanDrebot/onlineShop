import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ConfigService} from '../../../services/config.service';

@Component({
  selector: 'app-viewed-products',
  templateUrl: './viewed-products.component.html',
  styleUrls: ['./viewed-products.component.css']
})
export class ViewedProductsComponent implements OnInit {

  id: any = [];
  viewedProducts: any = [];

  constructor(
    private productService: ProductService,
    private config: ConfigService
  ) {
  }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem('viewedProducts'));
    this.getProducts();
  }

  getProducts() {
    for (const product of this.id) {
      this.productService.getProductById(product).subscribe(res => {
        this.viewedProducts.push(res);
      });
    }
  }

  deleteProduct(_id: any) {
    this.id = JSON.parse(localStorage.getItem('viewedProducts'));
    const index = this.id.findIndex(x => x === _id);
    this.id.splice(index, 1);
    this.viewedProducts.splice(index, 1);
    localStorage.setItem('viewedProducts', JSON.stringify(this.id));
  }
}
