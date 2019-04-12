import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {FilterServiceService} from './product/filter/filter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isOpen = true;
  selectedProduct: any = [];
  corbOfProduct: any = [];

  constructor(
    private productService: ProductService,
    private filterService: FilterServiceService
  ) {
  }

  ngOnInit(): void {
    this.filterService.subject.subscribe((res) => {
      this.corbOfProduct.push(res);
    });
  }


  closeMenu() {
    this.isOpen = !this.isOpen;
  }


  searchAllProduct(form: NgForm) {
    const product = form.value;
    this.productService.createProduct(product).subscribe((res) => {
      this.selectedProduct = res;
      console.log(this.selectedProduct);
    });
  }
}
