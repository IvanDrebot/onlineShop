import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('filterCompn') filterCompn: ElementRef;

  category: Category[] = [];
  producer: Producer[] = [];
  objQuery: any = {};

  constructor(
    private Productservice: ProductService,
    private router: ActivatedRoute,
    private filterService: FilterServiceService
  ) { }

  ngOnInit() {
    this.Productservice.getAllCategory().subscribe((category) => {
      this.category = category;
    });
    this.Productservice.getProducer().subscribe((producer) => {
      this.producer = producer;
    });
    this.getCategoryId();
    this.getProducerId();
  }

  getProducerId() {
    this.router.queryParams.subscribe((id) => {
      this.objQuery = id;
      this.filterService.subject.next(this.objQuery);
    });
  }

  getCategoryId() {
    this.router.queryParams.subscribe((id) => {
      this.objQuery = id;
      console.log(id);
      this.filterService.subject.next(this.objQuery);
    });
  }
}
