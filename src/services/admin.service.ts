import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  productUrl = 'http://localhost:3000/api/product';
  categoryUrl = 'http://localhost:3000/api/category';
  producerUrl = 'http://localhost:3000/api/producer';
  adminUrl = 'http://localhost:3000/api/admin';

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute) {
  }


  createProduct(product: Product) {
    return this.http.post(this.adminUrl, product);
  }
}
