import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../../services/admin.service';
import {Category} from '../../../models/Category';
import {Producer} from '../../../models/Producer';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: any;
  allCategory: Category[] = [];
  allProducer: Producer[] = [];
  imagePreview: any;
  image: File;

  constructor(
    private categoryService: CategoryService,
    private adminService: AdminService,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.allCategory = res;
    });
    this.productService.getProducer().subscribe((res) => {
      this.allProducer = res;
    });
  }

  createProduct(form: NgForm) {
    const product = form.value;
    const {imgUrl, ...others} = product;
    this.adminService.createProduct(others, this.image).subscribe((res) => {
      this.product = res;
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
