import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  singleProduct;

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
   const id = this.router.snapshot.params.id;
    this.getProductById(id);
  }

  getProductById(id) {
    id = this.router.snapshot.params.id;
    this.productService.getProductById(id).subscribe((singleProduct) => {
      this.singleProduct = singleProduct;
      // console.log(singleProduct);
    });
}

}
