import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../models/Category';
import {Producer} from '../../../models/Producer';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  category: Category[] = [];
  producer: Producer[] = [];

  constructor(
    private service: ProductService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAllCategory();

  }

  getAllCategory() {
    this.service.getAllCategory().subscribe((category) => {
      this.category = category;
    });
  }

  getAllProducer() {
    this.service.getProducer().subscribe((producer) => {
      this.producer = producer;
    });
  }


}
