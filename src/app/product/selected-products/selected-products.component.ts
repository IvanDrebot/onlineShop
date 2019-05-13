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
  corb: any = '';
  emptyList = true;
  count: any = null;
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
    this.corb = document.getElementById('count');
    this.corb.innerText -= 1;
  }

  addNumber(product) {
    const index = this.wishList.findIndex(x => x === product);
    const input = document.getElementsByClassName('price');
    this.count++;
    // @ts-ignore
    input.item(index).value = this.count;
    const res = document.getElementsByClassName('res');
    this.price = product.price * this.count;
    res.item(index).innerHTML = this.price;
    this.calcTotalPrice(this.price);
  }

  minusNumber(product) {
    const index = this.wishList.findIndex(x => x === product);
    const res = document.getElementsByClassName('res');
    const input = document.getElementsByClassName('price');
    this.count--;
    this.price -= product.price;
    // @ts-ignore
    input.item(index).value = this.count;
    res.item(index).innerHTML = this.price;
    this.calcTotalPrice(this.price);
  }

  calcTotalPrice(price) {
    const total = document.getElementById('total');
    // total.innerText =
  }

}
