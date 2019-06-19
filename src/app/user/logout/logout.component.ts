import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private appComp: AppComponent
  ) { }

  ngOnInit() {
    localStorage.setItem('user', '');
    setTimeout(() => {
      this.appComp.user = '';
      this.router.navigate(['/']);
    }, 5000);
  }

}
