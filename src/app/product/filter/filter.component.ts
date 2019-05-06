import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Producer} from '../../../models/Producer';
import {FilterServiceService} from './filter-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {

  producer: Producer[] = [];

  inputTypeFilters: any = [
    {
      name: 'price', type: 'number', className: 'price',
      placeholderName: ' min', value: ['']
    },
    {
      name: '', type: 'number', className: 'price1',
      placeholderName: ' max', value: ['']
    },
    {
      name: 'producer', type: 'radio', value:
     ['Asus', 'Xiaomi', 'Iphone', 'Lenovo']
    },
    {
      name: 'diagonalScreen', type: 'checkbox', value:
      ['50 px', '70 px', '100 px']
    },
    {
      name: 'resolutionScreen', type: 'checkbox', value:
      [10, 30, 40]
    },
    {
      name: 'displayType', type: 'radio', value:
      ['LCD', 'TFT', 'IPS']
    },
    {
      name: 'internalMemory', type: 'radio',
      value: ['50 GB', '60 GB']
    },
    {
      name: 'RAM', type: 'radio',
      value: [4, 6, 10]
    },
    {
      name: 'camera', type: 'radio',
      value: ['7 MP', '12 MP', '15 MP']
    },
    {
      name: 'frontCamera', type: 'radio',
      value: ['3 MP', '5 MP', '7 MP']
    },
    {
      name: 'battery', type: 'checkbox',
      value : ['5 MP', '7 MP', '10 MP']
    },
    {
      name: 'countOfCores', type: 'radio',
      value: [3, 5, 7]
    },
    {
      name: 'graduationYear', type: 'button',
      value: [2017, 2018, 2019]
    }
  ];


  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private filterService: FilterServiceService
  ) {
  }

  ngOnInit() {
    this.filterService.subject.subscribe(res => {
      this.generateFiltersKey(res);
    });
    this.productService.getProducer().subscribe((producer) => {
      this.producer = producer;
    });
  }

  generateFiltersKey(filtersKey) {
    for (const key of filtersKey) {
      const types = this.inputTypeFilters.filter(type => type.name === key);
    }
  }

  // getPrice(form: NgForm) {
  //   const price = form.value;
  //   this.filterService.subject.next(price);
  // }

}
