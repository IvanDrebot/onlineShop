import {Component, OnInit} from '@angular/core';
import {InitService} from '../../../services/auth.service';
import {NgForm} from '@angular/forms';
import {Response} from '../../../models/Response';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: InitService,
    private router: Router,
    private appComp: AppComponent
  ) {
  }

  ngOnInit() {
  }

  loginUser(login: NgForm) {
    const credentials = login.value;
    if (credentials.email.length && credentials.password.length) {
      this.router.navigate(['/user']);
      this.userService.loginUser(credentials).subscribe((newUser: Response) => {
      });
      localStorage.setItem('user', credentials.email);
      this.appComp.user = credentials.email;
    }
  }
}
