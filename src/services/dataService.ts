import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  order: any = {};
  subject = new Subject<any>();
  categoryPosition = new Subject<any>();
  isAdmin = new Subject<any>();
  product = new Subject<any>();

  constructor() {
    this.product.subscribe(res => {
      this.order = res;
    });
  }
}
