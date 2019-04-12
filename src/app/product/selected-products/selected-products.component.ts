import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FilterServiceService} from '../filter/filter-service.service';
import {Product} from '../../../models/Product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-selected-prdocuts',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.css']
})
export class SelectedProductsComponent implements OnInit {

  selectedProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private nextService: FilterServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.nextService.subject.subscribe((res) => {
      if (res) {
        this.productService.getProductById(res).subscribe((product) => {
          this.selectedProducts.push(product);
          console.log(this.selectedProducts);
        });
      }
    });
  }
}
