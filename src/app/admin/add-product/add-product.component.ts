import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../../services/admin.service';
import {Category} from '../../../models/Category';
import {Producer} from '../../../models/Producer';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: any;
  allCategory: Category[] = [];
  allProducer: Producer[] = [];

  constructor(
    private adminService: AdminService,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.productService.getAllCategory().subscribe((res) => {
      this.allCategory = res;
    });
    this.productService.getProducer().subscribe((res) => {
      this.allProducer = res;
    });
  }

  createProduct(form: NgForm) {
    const product = form.value;
    this.adminService.createProduct(product).subscribe((res) => {
      this.product = res;
    });
  }

}
