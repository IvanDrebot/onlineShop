import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from '../../../services/config.service';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  info: any;
  imagePreview: any;
  image: File;
  urlParams: any = {};
  isEdit: Boolean = false;
  singleCategory: any = {};

  constructor(
    private categoryService: CategoryService,
    private router: ActivatedRoute,
    private config: ConfigService,
    private route: Router
  ) {
  }

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
    this.categoryService.getCategoryById(id).subscribe(res => {
      this.singleCategory = res;
    });
  }

  changeCategory(form: NgForm) {
    const category = form.value;
    const {image, ...others} = category;
    if (this.isEdit) {
      this.updateCategory(this.urlParams.id, others, this.image);
    } else {
      this.addCategory(others, this.image);
    }
  }

  addCategory(category, img?) {
    this.categoryService.createCategory(category, img).subscribe((res) => {
      this.info = res;
    });
  }

  updateCategory(id, category, img) {
    this.categoryService.updateCategory(id, category, img).subscribe(res => {
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
    const confirm = window.confirm(`You want to delete ${this.singleCategory.name}`);
    if (confirm) {
      this.categoryService.deleteCategory(_id).subscribe(res => {
        this.route.navigate(['/admin/category-list']);
      });
    }
  }

}
