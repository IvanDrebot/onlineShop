import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../../models/Category';
import {ConfigService} from '../../../services/config.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  info: any;
  imagePreview: any;
  image: File;
  urlParams: {} = {};
  isEdit: Boolean = false;
  singleCategory: any = {};

  constructor(
    private adminService: AdminService,
    private router: ActivatedRoute,
    private config: ConfigService,
    private route: Router
  ) { }

  ngOnInit() {
   this.router.params.subscribe(res => {
     this.getSingleCategory(res.id);
     this.urlParams = res;
     if (res.id) {
       this.isEdit = true;
     }
   });
  }

  getSingleCategory(id) {
    this.adminService.getCategoryById(id).subscribe(res => {
      this.singleCategory = res;
    });
  }

  addCategory(form: NgForm) {
    const category = form.value;
    const {image, ...others} = category;
    this.adminService.createCategory(others, this.image).subscribe((res) => {
      this.info = res;
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

  deleteCategory(_id: any) {
    this.adminService.deleteCategory(_id).subscribe(res => {
      this.route.navigate(['/admin/category-list']);
    });
  }
}
