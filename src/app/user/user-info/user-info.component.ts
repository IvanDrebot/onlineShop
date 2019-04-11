import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InitService} from '../../../services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: InitService) {
  }

  openNav() {
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
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





  ngOnInit() {
  }
}
