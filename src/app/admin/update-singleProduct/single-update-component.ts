import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../../services/admin.service';
import {ProductService} from '../../../services/product.service';
import {FilterServiceService} from '../../../services/filter-service.service';
import {CategoryService} from '../../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-change-category',
  templateUrl: './single-update-component.html',
  styleUrls: ['./single-update-component.css']
})
export class SingleUpdateComponent implements OnInit {

  product: any = [];
  category: any = [];
  producer: any = [];
  id: any;

  constructor(
    private categoryService: CategoryService,
    private adminService: AdminService,
    private productService: ProductService,
    private filterService: FilterServiceService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
  this.router.params.subscribe(res => {
    this.getProduct(res.id);
    this.id = res;
  });
    this.getCategory();
    this.getProducer();
  }

  getProduct(id) {
    this.productService.getProductById(id).subscribe(res => {
      this.product = res;
      this.product.description = JSON.parse(this.product.description);
      console.log(this.product);
    });
  }

  updateProduct(update: NgForm, id) {
    const updatedProduct = update.value;
    const newId = id;
    this.adminService.updateProduct(newId, updatedProduct).subscribe((res) => {
      console.log(res);
    });
  }

  getCategory() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.category = res;
    });
  }

  getProducer() {
    this.productService.getProducer().subscribe((res) => {
      this.producer = res;
    });
  }


}
