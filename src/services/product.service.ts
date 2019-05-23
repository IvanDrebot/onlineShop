import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {ActivatedRoute} from '@angular/router';
import {addParams} from './urlParser';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  productUrl = 'http://localhost:3000/api/product';

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private config: ConfigService) {
  }

  getAllProduct(query = {}): Observable<Product[]> {
    const url = addParams(this.productUrl, query);
    return this.http.get<Product[]>(url);
  }

  getProductById(id): Observable<Product> {
    return this.http.get<Product>(this.productUrl + '/' + id);
  }


  createProduct(product, image: File) {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('category', product.category);
    fd.append('price', product.price);
    fd.append('brand', product.brand);
    fd.append('producer', product.producer);
    fd.append('sale', product.sale);
    fd.append('description', JSON.stringify(product.description));

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    console.log(product);
    return this.http.post(this.productUrl, fd, {headers: headers});
  }

  deleteProduct(id: any) {
    return this.http.delete(this.productUrl + '/' + id);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(this.productUrl + '/' + id, product);
  }

}
