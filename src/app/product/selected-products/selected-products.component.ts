import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FilterServiceService} from '../filter/filter-service.service';


@Component({
  selector: 'app-selected-prdocuts',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.css']
})
export class SelectedProductsComponent implements OnInit {


  constructor(
    private productService: ProductService,
    private selectedService: FilterServiceService,
  ) { }

  ngOnInit() {
  }

}
