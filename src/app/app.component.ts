import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen = true;
  selectedProduct: any = [];

  constructor(
    private productService: ProductService
  ) {
  }

  closeMenu() {
    this.isOpen = !this.isOpen;
  }

  openNav() {
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }

  searchAllProduct(form: NgForm) {
    const product = form.value;
    this.productService.createProduct(product).subscribe((res) => {
      this.selectedProduct = res;
      console.log(this.selectedProduct);
    });
  }
}
