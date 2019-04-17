import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';
import {AdminService} from '../../../services/admin.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product[] = [];
  arrayOfPages: any = [];
  query: any = {};
  limit = 5;
  skip: any;
  deleteInfo;
  isShow = false;
  countOfProducts: any;


  constructor(
    private productService: ProductService,
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCountOfProduct();
    this.query.skip = 0;
    this.query.limit = this.limit;
    this.getAllProduct(this.query);
  }

  showEditForm() {
    this.isShow = !this.isShow;
  }

  getAllProduct(query) {
    this.productService.getAllProduct(this.query).subscribe((res) => {
      this.product = res;
    });
  }

  deleteProduct(id) {
    this.adminService.deleteProduct(id).subscribe((res) => {
      this.deleteInfo = res;
      this.getAllProduct(this.query);
    });
  }

  getCountOfProduct() {
    this.productService.getAllProduct(this.query).subscribe((products) => {
      this.countOfProducts = products.length;
      this.getCountOfPages(products.length);
    });
  }

  getCountOfPages(quntityProduct) {
    const countOfPages = quntityProduct / this.limit;
    for (let i = 0; i <= countOfPages; i++) {
      this.arrayOfPages.push(i);
    }
  }

  changePage(page) {
    this.query.limit = this.limit;
    this.query.skip = this.limit * page;
    this.getAllProduct(this.query);
  }

// PAGINATION--------------------------------

  updateProduct(update: NgForm, id) {
    const updatedProduct = update.value;
    const newId = id;
    this.adminService.updateProduct(newId, updatedProduct).subscribe((res) => {
      console.log(res);
    });
  }
}
