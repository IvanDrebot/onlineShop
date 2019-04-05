import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../models/Users';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  usersUrl = 'http://localhost:3000/api/register';
  loginUrl = 'http://localhost:3000/api/login';
  logoutUrl = 'http://localhost:3000/api/logout';

  constructor(private http: HttpClient) {
  }

  createUser(users: Users) {
    return this.http.post(this.usersUrl, users);
  }

  loginUser(credentials: {email: string, password: string}) {
    return this.http.post(this.loginUrl, credentials);
  }

  logoutUser(token: string) {
    return this.http.get(this.logoutUrl);
  }

}
