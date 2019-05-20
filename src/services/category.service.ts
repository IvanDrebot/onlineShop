import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryUrl = 'http://localhost:3000/api/category';

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute
  ) { }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }

  getCategoryById(id) {
    return this.http.get(this.categoryUrl + '/' + id);
  }

  createCategory(category, image: File) {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('name', category.name);
    fd.append('description', category.description);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    console.log(category);
    return this.http.post(this.categoryUrl, fd, {headers: headers});
  }

  updateCategory(id: string, category, image?: File): Observable<Category> {
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    fd.append('name', category.name);
    fd.append('description', category.description);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    console.log(this.categoryUrl + '/' + id);
    return this.http.put<Category>(this.categoryUrl + '/' + id, fd, {headers: headers});
  }

  deleteCategory(url: any) {
    return this.http.delete(this.categoryUrl, url);
  }
}
