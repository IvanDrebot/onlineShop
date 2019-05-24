import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OrderService} from '../../../services/order.service';
import {DataService} from '../../../services/dataService';
import {SingleProductComponent} from '../single-product/single-product.component';

@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.component.html',
  styleUrls: ['./client-order.component.css']
})
export class ClientOrderComponent implements OnInit {

  payment: any = null;
  orderData: any = {};

  constructor(
    private orderService: OrderService,
    private nextService: DataService
  ) {
  }

  ngOnInit() {
  }

  makeOrder(orderData: NgForm) {
    this.orderData.order = this.nextService.order;
    this.orderData.userInfo = orderData.value;
    this.orderService.addOrder(this.orderData).subscribe(res => {
      console.log(res);
    });
  }

}
