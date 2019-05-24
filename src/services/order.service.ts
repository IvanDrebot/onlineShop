import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/Product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  ordersUrl = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) {
  }

  getOrders() {
    return this.http.get(this.ordersUrl);
  }

  getOrderById(id) {
    return this.http.get(this.ordersUrl + '/' + id);
  }

  addOrder(orderData): Observable<Product> {
    return this.http.post<Product>(this.ordersUrl, orderData);
  }

  deleteOrder(id) {
    return this.http.delete(this.ordersUrl + '/' + id);
  }

}
