import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  res: any;

  constructor(
    private adminService: AdminService,
    private productService: ProductService
  ) {
  }


  createProduct(form: NgForm) {
    const product = form.value;
    this.adminService.createProduct(product).subscribe((res) => {
      this.res = res;
    });
  }

  ngOnInit() {
  }

}
