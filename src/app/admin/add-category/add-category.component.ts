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
  imagePreview: any;
  image: File;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
  }

  addCategory(form: NgForm) {
    const category = form.value;
    const {image, ...others} = category;
    this.adminService.createCategory(others, this.image).subscribe((res) => {
      this.category = res;
    });
  }

  fileUpload($event: any) {
    // @ts-ignore
    const file = event.target.files[0];
    this.image = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

}
