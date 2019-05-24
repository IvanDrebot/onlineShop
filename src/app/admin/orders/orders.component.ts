import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any = [];

  constructor(
    private orderService: OrderService
  ) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(res => {
      this.orders = res;
    });
  }

  deleteOrder(_id: any) {
    const confirm = window.confirm('Do you want to delete this order?');
    if (confirm) {
      this.orderService.deleteOrder(_id).subscribe(res => {
        this.getOrders();
      });
    }
  }
}
