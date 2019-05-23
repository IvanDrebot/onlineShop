import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/Product';
import {AdminService} from '../../../services/admin.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {FilterServiceService} from '../../../services/filter-service.service';
import {CategoryService} from '../../../services/category.service';
import {ProducerService} from '../../../services/producer.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit {

  product: Product[] = [];
  query: any = {
    limit: 5,
    skip: 0
  };
  deleteInfo;
  category: any = [];
  producer: any = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private producerService: ProducerService,
    private activatedRoute: ActivatedRoute,
    private filterService: FilterServiceService
  ) {
  }

  ngOnInit() {
    this.getCategory();
    this.getProducer();
    this.getAllProduct(this.query);
  }


  getCategory() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.category = res;
    });
  }

  getProducer() {
    this.producerService.getProducer().subscribe((res) => {
      this.producer = res;
    });
  }

  getAllProduct(query) {
    this.productService.getAllProduct(query).subscribe((res) => {
      // @ts-ignore
      this.product = res.products;
    });
  }

  deleteProduct(product) {
    const confirm = window.confirm(`${'Do you want to delete'} ${product.brand}`);
    if (confirm) {
      this.productService.deleteProduct(product._id).subscribe((res) => {
        this.deleteInfo = res;
        this.getAllProduct(this.query);
      });
    }
  }

  nextPage(number) {
    this.query.skip += number;
    this.getAllProduct(this.query);
  }

  previousPage(number) {
    this.query.skip += number;
    this.getAllProduct(this.query);
  }

}
