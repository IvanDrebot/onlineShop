import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {InitService} from '../../../services/auth.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  user: any;
  product: any;

  constructor(
    private adminService: AdminService,
    private userService: InitService
  ) { }

  ngOnInit() {
    this.getCountOfProduct();
    this.getCountOfUser();
  }

  getCountOfProduct() {
    this.adminService.getCountOfProduct().subscribe((res) => {
      this.product = res;
    });
  }

  getCountOfUser() {
    this.userService.getCount().subscribe((res) => {
      this.user = res;
    });
  }

}
