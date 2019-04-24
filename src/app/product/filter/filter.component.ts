import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../models/Category';
import {Producer} from '../../../models/Producer';
import {FilterServiceService} from './filter-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  @ViewChild('filterCompn') filterCompn: ElementRef;

  category: Category[] = [];
  producer: Producer[] = [];

  constructor(
    private Productservice: ProductService,
    private router: ActivatedRoute,
    private filterService: FilterServiceService
  ) {
  }

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
      this.filterService.subject.next(id);
    });
  }

  getCategoryId() {
    this.router.queryParams.subscribe((id) => {
      this.filterService.subject.next(id);
    });
  }

  getPrice(form: NgForm) {
    const price = form.value;
    this.filterService.subject.next(price);
  }

}
