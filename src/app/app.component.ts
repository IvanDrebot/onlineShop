import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FilterServiceService} from '../services/filter-service.service';
import {Category} from '../models/Category';
import {Producer} from '../models/Producer';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  category: Category[] = [];
  producer: Producer[] = [];
  isOpen = true;
  selectedProduct: any;
  countOfProduct: any = null;
  isAdmin: Boolean = false;

  constructor(
    private categoryService: CategoryService,
    private filterService: FilterServiceService,
    private router: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    // this.getWishList();
    this.categoryService.getAllCategory().subscribe((category) => {
      this.category = category;
    });
  }

  getWishList() {
    this.countOfProduct = JSON.parse(localStorage.getItem('wishList')).length;
    this.filterService.wishList.subscribe(res => {
      this.countOfProduct += res;
      console.log(this.countOfProduct);
    });
  }

  closeMenu() {
    this.isOpen = !this.isOpen;
  }

  searchAllProduct(form: NgForm) {
    const product = form.value;
    this.selectedProduct = product.brand;
  }

  check() {
    this.isAdmin = !this.isAdmin;
  }
}
