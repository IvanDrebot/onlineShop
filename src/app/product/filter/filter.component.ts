import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../models/Category';
import {Producer} from '../../../models/Producer';
import {hasOwnProperty} from 'tslint/lib/utils';
import {logger} from 'codelyzer/util/logger';
import {FilterServiceService} from './filter-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
@ViewChild('filterCompn') filterCompn: ElementRef;

  category: Category[] = [];
  producer: Producer[] = [];
  objQuery: any = {};

  constructor(
    private service: ProductService,
    private router: ActivatedRoute,
    private filterService: FilterServiceService
  ) { }

  ngOnInit() {
    this.getAllCategory();
    this.getAllProducer();
  }

  getAllCategory() {
    this.service.getAllCategory().subscribe((category) => {
      this.category = category;
      console.log(category);
    });
  }

  getAllProducer() {
    this.service.getProducer().subscribe((producer) => {
      this.producer = producer;
    });
  }

  returnProducer(producer) {
    this.objQuery.producer = producer._id;
    this.createQuery(this.objQuery);
  }

  returnCategory(category) {
    this.objQuery.category = category._id;
    this.createQuery(this.objQuery);
  }

  createQuery(obj) {
    const arrOfQuery = [];
    for (let key in obj) {
      console.log(obj);
      if (obj[key]) {
        arrOfQuery.push(`${key}=${obj[key]}`);
      }
    }
    const concatArr = arrOfQuery.join('&');
    console.log(concatArr);
    this.filterService.subject.next(concatArr);
  }
}
