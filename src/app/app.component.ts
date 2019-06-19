import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataService} from '../services/dataService';
import {Category} from '../models/Category';
import {Producer} from '../models/Producer';
import {ActivatedRoute, Router} from '@angular/router';
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

  user: String = '';

  links = [
    {url: '/', name: 'Info'},
    {url: '/', name: 'Contacts'},
    {url: '/register', name: 'Sign in'},
  ];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.user = localStorage.getItem('user');
    this.categoryService.getAllCategory().subscribe((category) => {
      this.category = category;
    });
  }

  check() {
    this.isAdmin = !this.isAdmin;
  }

  logout() {
    const confirm = window.confirm('Do you want to exit?');
    if (confirm) {
      this.router.navigate(['/logout']);
    }
  }
}
