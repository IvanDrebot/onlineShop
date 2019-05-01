import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {FilterServiceService} from './product/filter/filter-service.service';
import {Category} from '../models/Category';
import {Producer} from '../models/Producer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  category: Category[] = [];
  producer: Producer[] = [];

  isOpen = true;
  selectedProduct: any = [];
  corbOfProduct: any = [];

  constructor(
    private productService: ProductService,
    private filterService: FilterServiceService,
    private router: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.productService.getAllCategory().subscribe((category) => {
      this.category = category;
    });
    this.productService.getProducer().subscribe((producer) => {
      this.producer = producer;
    });
    // this.filterService.subject.subscribe((res) => {
    //   this.corbOfProduct.push(res);
    // });
    this.getCategoryId();
    this.getProducerId();
  }

  getProducerId() {
    this.router.queryParams.subscribe((id) => {
      this.filterService.subject.next(id);
    });
  }

  getCategoryId() {
    this.router.queryParams.subscribe((id) => {
      this.filterService.subject.next(id);
    });
  }


  closeMenu() {
    this.isOpen = !this.isOpen;
  }


  searchAllProduct(form: NgForm) {
    const product = form.value;
    this.productService.getProductById(product).subscribe((res) => {
      this.selectedProduct = res;
      console.log(this.selectedProduct);
    });
  }

}
