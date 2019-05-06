import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  subject = new Subject<any>();
  wishList = new Subject<any>();
  constructor() {}
}
