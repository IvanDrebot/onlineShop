import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InitService} from '../../../services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  links = [
    {url: '/user/wishList', name: 'Wish List'},
    {url: '/user/viewed', name: 'Viewed'},
    {url: '/user/ordering', name: 'Ordering'},
    {url: '/user/history', name: 'History'},
  ];


  constructor(
    private router: Router,
    private userService: InitService) {
  }

  ngOnInit() {
  }

  logout() {
    const token = localStorage.getItem('accessToken');
    this.userService.logoutUser(token).subscribe(res => {
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000);
      console.log(res);
      localStorage.clear();
    });
  }

}
