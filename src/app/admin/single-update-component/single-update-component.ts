import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../../services/admin.service';
import {ProductService} from '../../../services/product.service';
import {FilterServiceService} from '../../../services/filter-service.service';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-change-category',
  templateUrl: './single-update-component.html',
  styleUrls: ['./single-update-component.css']
})
export class SingleUpdateComponent implements OnInit {

  category: any = [];
  producer: any = [];
  id: any;

  constructor(
    private categoryService: CategoryService,
    private adminService: AdminService,
    private productService: ProductService,
    private filterService: FilterServiceService
  ) { }

  ngOnInit() {
    this.selectedId();
    this.getCategory();
    this.getProducer();
  }

  selectedId() {
    this.filterService.updateProduct.subscribe(id => {
      this.id = id;
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
