import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  url;
  res: any = [];

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  deleteProducer() {
    this.adminService.deleteProducer(this.url).subscribe((res) => {
      this.res = res;
    });
  }

}
