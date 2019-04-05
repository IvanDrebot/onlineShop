import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {InitService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {Response} from '../../../models/Response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUser;

  constructor(
    private userService: InitService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createUser(register: NgForm) {
    const user = register.value;
    this.userService.createUser(user).subscribe((registeredUser: Response) => {
      if (registeredUser.success) {
        this.router.navigate(['/login']);
      } else {
        this.registeredUser = registeredUser;
      }
    });
  }
}
