import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Producer} from '../../../models/Producer';
import {DataService} from '../../../services/dataService';
import {NgForm} from '@angular/forms';
import {ProducerService} from '../../../services/producer.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {

  producer: Producer[] = [];
  price: any = {};

  constructor(
    private producerService: ProducerService,
    private router: Router,
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.producerService.getProducer().subscribe((producer) => {
      this.producer = producer;
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
}
