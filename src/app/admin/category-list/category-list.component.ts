import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ConfigService} from '../../../services/config.service';
import {AdminService} from '../../../services/admin.service';
import {Category} from '../../../models/Category';
import {FilterServiceService} from '../../../services/filter-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category: Category[] = [];

  constructor(
    private productService: ProductService,
    private config: ConfigService,
    private adminService: AdminService,
    private nextService: FilterServiceService,
    private router: Router) { }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe(res => {
      this.category = res;
    });
  }

  addCategory() {
    this.router.navigate(['admin/edit-category']);
  }
}
