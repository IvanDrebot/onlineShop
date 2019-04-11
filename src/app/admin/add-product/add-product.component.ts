import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  res: any;

  constructor(
    private productService: ProductService
  ) {
  }


  createProduct(form: NgForm) {
    const product = form.value;
    this.productService.createProduct(product).subscribe((res) => {
      this.res = res;
    });
  }

  ngOnInit() {
  }

}
