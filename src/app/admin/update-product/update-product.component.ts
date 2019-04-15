import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product[] = [];
  query: any = {};
  limit = 5;
  skip: any;
  deleteInfo;
  isShow = false;

  constructor(
    private productService: ProductService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.query.limit = this.limit;
    this.query.skip = 0;
    this.productService.getAllProduct(this.query).subscribe((res) => {
      this.product = res;
    });
  }

  showEditForm() {
    this.isShow = !this.isShow;
  }

  deleteProduct(id) {
    this.adminService.deleteProduct(id).subscribe((res) => {
      this.deleteInfo = res;
      console.log(res);
    });
  }

}
