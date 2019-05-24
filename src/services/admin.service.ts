import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ConfigService} from './config.service';


@Injectable({
  providedIn: 'root'
})

export class AdminService {


  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private config: ConfigService) {
  }

  register(admin) {
    return this.http.post(this.config.api + '/admin-register', admin);
  }

  login(credentials: {email: string, password: string}) {
    return this.http.post(this.config.api + '/admin-login', credentials);
  }

  logout(token: string) {
    return this.http.get(this.config.api);
  }


}
