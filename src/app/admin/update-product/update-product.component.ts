import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';
import {AdminService} from '../../../services/admin.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {FilterServiceService} from '../../../services/filter-service.service';

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
  countOfProducts: any;
  category: any = [];
  producer: any = [];


  constructor(
    private productService: ProductService,
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private filterService: FilterServiceService
  ) { }

  ngOnInit() {
    this.getCategory();
    this.getProducer();
    this.getCountOfProduct();
    this.query.skip = 0;
    this.query.limit = this.limit;
    this.getAllProduct(this.query);
  }


  getCategory() {
    this.productService.getAllCategory().subscribe((res) => {
      this.category = res;
    });
  }

  getProducer() {
    this.productService.getProducer().subscribe((res) => {
      this.producer = res;
    });
  }

  getAllProduct(query) {
    this.productService.getAllProduct(this.query).subscribe((res) => {
      // @ts-ignore
      this.product = res.products;
      console.log(this.product);
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

  getId(id: any) {
    this.filterService.updateProduct.next(id);
  }
}
