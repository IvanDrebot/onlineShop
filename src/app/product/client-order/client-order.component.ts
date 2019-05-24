import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {OrderService} from '../../../services/order.service';
import {SingleProductComponent} from '../single-product/single-product.component';

@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.component.html',
  styleUrls: ['./client-order.component.css']
})
export class ClientOrderComponent implements OnInit {

  userInfo: any = [];

  constructor(
    private orderService: OrderService,
    private product: SingleProductComponent
  ) { }

  ngOnInit() {
  }

  makeOrder(orderData: NgForm) {
    this.userInfo.push(orderData.value);
  }

}
