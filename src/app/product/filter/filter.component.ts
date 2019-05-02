import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Producer} from '../../../models/Producer';
import {FilterServiceService} from './filter-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {

  producer: Producer[] = [];
  filters: any;

  constructor(
    private Productservice: ProductService,
    private router: ActivatedRoute,
    private filterService: FilterServiceService
  ) {
  }

  ngOnInit() {
    this.filterService.subject.subscribe(res => {
      this.filters = res;
    });
    this.Productservice.getProducer().subscribe((producer) => {
      this.producer = producer;
    });
  }


  // getPrice(form: NgForm) {
  //   const price = form.value;
  //   this.filterService.subject.next(price);
  // }

}
