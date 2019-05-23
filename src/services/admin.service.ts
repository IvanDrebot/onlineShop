import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AdminService {

  adminUrl = 'http://localhost:3000/api/admin';

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute) {
  }



}
