import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FilterServiceService} from '../filter/filter-service.service';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-selected-prdocuts',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.css']
})
export class SelectedProductsComponent implements OnInit {

  selectedProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private selectedService: FilterServiceService,
  ) { }

  ngOnInit() {
    this.selectedService.subject.subscribe((id) => {
        this.productService.getProductById(id).subscribe((product) => {
          this.selectedProducts.push(product);
          console.log(this.selectedProducts);
        });
    });
  }
}
