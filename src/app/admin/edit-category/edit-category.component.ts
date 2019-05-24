import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from '../../../services/config.service';
import {CategoryService} from '../../../services/category.service';
import {DataService} from '../../../services/dataService';

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
  field: any = [];

  constructor(
    private categoryService: CategoryService,
    private router: ActivatedRoute,
    private config: ConfigService,
    private route: Router,
    private nextService: DataService
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
      this.field = this.singleCategory.description[0].split(',');
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
    category.description = this.field;
    this.categoryService.createCategory(category, img).subscribe((res) => {
      this.info = res;
    });
  }

  addField() {
    const res = window.prompt('Add new position:');
    this.field.push(res);
    this.nextService.categoryPosition.next(this.field);
  }

  deleteField(item: any) {
    const index = this.field.findIndex(i => i === item);
    this.field.splice(index, 1);
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

  deleteCategory() {
    const confirm = window.confirm(`Do you want to delete ${this.singleCategory.name}`);
    if (confirm) {
      this.categoryService.deleteCategory(this.urlParams.id).subscribe(res => {
        console.log(res);
        this.route.navigate(['/admin/category-list']);
      });
    }
  }
}
