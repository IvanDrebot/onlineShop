import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FilterServiceService} from '../../../services/filter-service.service';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.css']
})
export class SelectedProductsComponent implements OnInit {

  wishList: Product[] = [];
  emptyList = true;
  count: any = null;
  input: any = '';
  price: any = null;

  constructor(
    private productService: ProductService,
    private filterService: FilterServiceService
  ) {
  }

  ngOnInit() {
    this.wishList = JSON.parse(localStorage.getItem('wishList'));
  }

  deleteItem(singleProduct: Product) {
    this.wishList = JSON.parse(localStorage.getItem('wishList'));
    const index = this.wishList.findIndex(x => x.id === singleProduct.id);
    this.wishList.splice(index, 1);
    localStorage.setItem('wishList', JSON.stringify(this.wishList));
  }

  addNumber(price) {
    const res = document.getElementById('res');
    this.input = document.getElementById('price');
    this.count++;
    this.input.value = this.count;
    this.price = price * this.count;
    res.innerText = this.price;
    this.calcTotalPrice();
  }

  minusNumber(price) {
    const res = document.getElementById('res');
    this.input = document.getElementById('price');
    this.count--;
    this.price -= price;
    this.input.value = this.count;
    res.innerText = this.price;
    this.calcTotalPrice();
  }

  calcTotalPrice() {
    const total = document.getElementById('total');
    total.innerText = this.price;
  }

}
