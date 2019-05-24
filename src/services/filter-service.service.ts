import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilterServiceService {

  // arrOfProducts: any[] = [];
  wishList = new Subject<any>();
  subject = new Subject<any>();
  categoryPosition = new Subject<any>();
  isAdmin = new Subject<any>();

  constructor() {
    // this.wishList.subscribe(res => {
    //   this.arrOfProducts.push(res);
    //   localStorage.setItem('wishList', JSON.stringify(this.arrOfProducts));
    // });
  }
}
