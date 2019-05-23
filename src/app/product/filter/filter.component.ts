import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Producer} from '../../../models/Producer';
import {FilterServiceService} from '../../../services/filter-service.service';
import {NgForm} from '@angular/forms';
import {ProducerService} from '../../../services/producer.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {

  producer: Producer[] = [];
  laptops = false;
  tv = false;
  Phones = false;
  reloading = false;

  constructor(
    private producerService: ProducerService,
    private router: ActivatedRoute,
    private filterService: FilterServiceService
  ) {
  }

  ngOnInit() {
    this.producerService.getProducer().subscribe((producer) => {
      this.producer = producer;
    });
    this.reloading = true;
    this.getFilters();
  }

  getFilters() {
    this.filterService.subject.subscribe(res => {
      if (res.category.name === 'Phones') {
        this.Phones = true;
        this.laptops = false;
        this.tv = false;
      } else if (res.category.name === 'Tv') {
        this.Phones = false;
        this.laptops = false;
        this.tv = true;
      } else {
        this.laptops = true;
        this.Phones = false;
        this.tv = false;
      }
    });
  }

  getPrice(form: NgForm) {
    const price = form.value;
    console.log(price);
  }
}
