import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {Producer} from '../models/Producer';
import {ActivatedRoute} from '@angular/router';
import {addParams} from './urlParser';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = 'http://localhost:3000/api/product';
  producerUrl = 'http://localhost:3000/api/producer';

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private config: ConfigService) {
  }

  getProducer(): Observable<Producer[]> {
    return this.http.get<Producer[]>(this.producerUrl);
  }

  getAllProduct(query = {}): Observable<Product[]> {
    const url = addParams(this.productUrl, query);
    return this.http.get<Product[]>(url);
  }

  getProductById(id): Observable<Product> {
    return this.http.get<Product>(this.productUrl + '/' + id);
  }

}
