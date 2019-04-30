import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {FilterServiceService} from '../filter/filter-service.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  id = this.router.snapshot.params.id;
  singleProduct;

  constructor(
    private productService: ProductService,
    private filterService: FilterServiceService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProductById(this.id);
  }

  getProductById(id) {
    id = this.router.snapshot.params.id;
    this.productService.getProductById(id).subscribe((singleProduct) => {
      this.singleProduct = singleProduct;
    });
  }

  // AddProductToCart(id: any) {
  //     this.filterService.subject.next(id);
  // }
}
