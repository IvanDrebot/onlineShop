import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  links = [
    {url: '/admin/category-list', name: 'Category'},
    {url: '/admin/add-producer', name: 'Producer'},
    {url: '/admin/product-list', name: 'Product'},
    {url: '/admin/statistics', name: 'Statistic'},
    {url: '/admin/orders', name: 'Orders'},
  ];

  constructor(
    private appComp: AppComponent
  ) { }


  ngOnInit() {
  }

  logout() {
    this.appComp.isAdmin = false;
  }
}
