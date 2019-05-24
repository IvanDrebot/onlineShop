import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../../services/admin.service';
import {Router} from '@angular/router';
import {Response} from '../../../models/Response';
import {FilterServiceService} from '../../../services/filter-service.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  // @ViewChild('app') main: AppComponent;


  isRegister: Boolean = true;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private appComp: AppComponent,
    private nextService: FilterServiceService
  ) {
  }

  ngOnInit() {
  }

  register(admin: NgForm) {
    const adminBody = admin.value;
    this.adminService.register(adminBody).subscribe(res => {
      console.log(res);
    });
  }

  login(admin: NgForm) {
    const credentials = admin.value;
    this.adminService.login(credentials).subscribe((res: Response) => {
      if (res.success) {
        this.appComp.isAdmin = true;
        this.router.navigate(['/admin']);
      }
    });
  }

  check() {
    this.isRegister = false;
  }
}
