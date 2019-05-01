import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {FilterServiceService} from './product/filter/filter-service.service';
import {Category} from '../models/Category';
import {Producer} from '../models/Producer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  category: Category[] = [];
  producer: Producer[] = [];

  isOpen = true;
  selectedProduct: any = [];
  corbOfProduct: any = [];

  constructor(
    private productService: ProductService,
    private filterService: FilterServiceService,
    private router: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.productService.getAllCategory().subscribe((category) => {
      this.category = category;
    });
    // this.filterService.subject.subscribe((res) => {
    //   this.corbOfProduct.push(res);
    // });
  }

  closeMenu() {
    this.isOpen = !this.isOpen;
  }

  searchAllProduct(form: NgForm) {
    const product = form.value;
    this.productService.getProductById(product).subscribe((res) => {
      this.selectedProduct = res;
    });
  }

}
