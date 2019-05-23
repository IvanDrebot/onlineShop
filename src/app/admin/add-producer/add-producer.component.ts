import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProducerService} from '../../../services/producer.service';

@Component({
  selector: 'app-add-producer',
  templateUrl: './add-producer.component.html',
  styleUrls: ['./add-producer.component.css']
})
export class AddProducerComponent implements OnInit {

  producer: any;

  constructor(
    private producerService: ProducerService) { }

  ngOnInit() {}

  addProducer(form: NgForm) {
    const producer = form.value;
    this.producerService.createProducer(producer).subscribe((res) => {
      this.producer = res;
    });
  }

}
