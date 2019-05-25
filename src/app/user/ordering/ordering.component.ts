import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css']
})
export class OrderingComponent implements OnInit {

  orderId: any = [];
  orders: any = [];

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.orderId = JSON.parse(localStorage.getItem('orders'));
    for (const order of this.orderId) {
      this.productService.getProductById(order).subscribe(res => {
        this.orders.push(res);
      });
    }
  }

  deleteOrder(_id: any) {

  }
}
