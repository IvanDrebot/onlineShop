import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';
import {Product} from '../models/Product';
import {Producer} from '../models/Producer';
import {ActivatedRoute} from '@angular/router';
import {Filter} from '../models/Filter';
import {addParams} from './urlParser';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = 'http://localhost:3000/api/product';
  categoryUrl = 'http://localhost:3000/api/category';
  producerUrl = 'http://localhost:3000/api/producer';

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute) {
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }

  getProducer(): Observable<Producer[]> {
    return this.http.get<Producer[]>(this.producerUrl);
  }

  getAllProduct(query = {}): Observable<Product[]> {
    const url = addParams(this.productUrl, query);
    console.log(url);
    return this.http.get<Product[]>(url);
  }

  getProductById(id): Observable<Product> {
    return this.http.get<Product>(this.productUrl + '/' + id);
  }

}
