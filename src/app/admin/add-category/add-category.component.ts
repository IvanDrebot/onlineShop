import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: any;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
  }

  addCategory(form: NgForm) {
    const category = form.value;
    this.adminService.createCategory(category).subscribe((res) => {
      this.category = res;
    });
  }

}
