import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Producer} from '../../../models/Producer';
import {DataService} from '../../../services/dataService';
import {NgForm} from '@angular/forms';
import {ProducerService} from '../../../services/producer.service';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {

  producer: Producer[] = [];
  id: any = '';
  category: any = [];
  price: any = {};
  filters: any = [];

  constructor(
    private producerService: ProducerService,
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(res => {
      this.id = res.category;
    });
    this.getProducer();
    this.getCategory();
    this.getFilterKeys();
  }

  getProducer() {
    this.producerService.getProducer().subscribe((producer) => {
      this.producer = producer;
    });
  }

  getCategory() {
    this.categoryService.getCategoryById(this.id).subscribe(res => {
      this.category = res;
      const description = this.category.description[0].split(',');
      for (const field of description) {
        this.filters.push({name: field});
      }
    });
  }

  getPrice(form: NgForm) {
    this.price = form.value;
    this.router.navigate([], {
      queryParams: {
        'min': this.price.min,
        'max': this.price.max
      },
      queryParamsHandling: 'merge',
    });
  }

  getFilterKeys() {
    this.dataService.subject.subscribe(res => {
      // console.log(res);
    });
  }
}
