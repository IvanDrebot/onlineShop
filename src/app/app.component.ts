import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../services/dataService';
import {Category} from '../models/Category';
import {Producer} from '../models/Producer';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../services/category.service';
import {AuthComponent} from './admin/auth/auth.component';
import {SingleProductComponent} from './product/single-product/single-product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  category: Category[] = [];
  isOpen = true;
  isAdmin: Boolean = false;
  wishList = 0;

  constructor(
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((category) => {
      this.category = category;
    });
  }

  closeMenu() {
    this.isOpen = !this.isOpen;
  }

  searchAllProduct(form: NgForm) {
    const product = form.value;
  }

  check() {
    this.isAdmin = !this.isAdmin;
  }
}
