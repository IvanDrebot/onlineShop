import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../models/Category';
import {Producer} from '../../../models/Producer';
import {FilterServiceService} from './filter-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  category: Category[] = [];
  producer: Producer[] = [];
  filter: any = {};
  filteredProduct: any = [];

  constructor(
    private service: ProductService,
    private router: ActivatedRoute,
    private filterService: FilterServiceService
  ) {
  }

  ngOnInit() {
    this.service.getProducer().subscribe((producer) => {
      this.producer = producer;
    });
    this.service.getAllCategory().subscribe((category) => {
      this.category = category;
    });
  }

  sendFilter(obj) {
    this.service.createFilter(this.filter).subscribe((res) => {
      this.filteredProduct = res;
      this.sendDateInGrid();
    });
  }

  sendDateInGrid() {
    if (this.filteredProduct.length) {
      this.filterService.subject.next(this.filteredProduct);
    }
  }

  returnProducer(producer) {
    const producerId = producer._id;
    this.filter.producer = producerId;
    this.sendFilter(this.filter);
  }

  returnCategory(category) {
    const categoryId = category._id;
    this.filter.category = categoryId;
    this.sendFilter(this.filter);
  }

}
