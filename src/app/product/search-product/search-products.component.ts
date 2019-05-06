import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-search-service',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {

  product: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.queryParams.subscribe(brand => {
      this.productService.getAllProduct(brand).subscribe(res => {
        // @ts-ignore
        this.product = res.products;
      });
    });
  }

}
