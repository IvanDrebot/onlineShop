import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Producer} from '../models/Producer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  producerUrl = 'http://localhost:3000/api/producer';

  constructor(private http: HttpClient) { }

  getProducer(): Observable<Producer[]> {
    return this.http.get<Producer[]>(this.producerUrl);
  }

  createProducer(producer: Producer) {
    return this.http.post(this.producerUrl, producer);
  }

  deleteProducer(id: any) {
    return this.http.delete(this.producerUrl + '/' + id);
  }
}
