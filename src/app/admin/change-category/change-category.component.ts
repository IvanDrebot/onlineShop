import { Component, OnInit } from '@angular/core';
import {FilterServiceService} from '../../../services/filter-service.service';
import {Category} from '../../../models/Category';
import {ProductService} from '../../../services/product.service';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-change-category',
  templateUrl: './change-category.component.html',
  styleUrls: ['./change-category.component.css']
})
export class ChangeCategoryComponent implements OnInit {

  category: Category[] = [];
  deleteInfo: any = '';

  constructor(
    private nextService: FilterServiceService,
    private productService: ProductService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
      this.productService.getAllCategory().subscribe(res => {
        this.category = res;
      });
  }

  deleteProduct(id) {
    this.adminService.deleteCategory(id).subscribe((res) => {
      this.deleteInfo = res;
      this.category.shift();
    });
  }

}
