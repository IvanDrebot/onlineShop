import {Component, OnInit} from '@angular/core';
import {InitService} from '../../../services/auth.service';
import {NgForm} from '@angular/forms';
import {Response} from '../../../models/Response';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: InitService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  loginUser(login: NgForm) {
    const credentials = login.value;
    this.userService.loginUser(credentials).subscribe((newUser: Response) => {
      console.log(newUser);
      if (newUser.success) {
        this.router.navigate(['user']);
        localStorage.setItem('token', newUser.message);
      } else {
        console.log(newUser);
      }
    });
  }
}
