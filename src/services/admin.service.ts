import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../models/Product';
import {Producer} from '../models/Producer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  producerUrl = 'http://localhost:3000/api/producer';
  adminUrl = 'http://localhost:3000/api/admin';

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute) {
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

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post(this.adminUrl, fd, {headers: headers});
  }

  createProducer(producer: Producer) {
    return this.http.post(this.producerUrl, producer);
  }

  deleteProducer(id: any) {
    return this.http.delete(this.producerUrl + '/' + id);
  }


  deleteProduct(id: any) {
    return this.http.delete(this.adminUrl + '/' + id);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(this.adminUrl + '/' + id, product);
  }

  getCountOfProduct() {
    return this.http.get(this.adminUrl);
  }

}
