import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-producer',
  templateUrl: './add-producer.component.html',
  styleUrls: ['./add-producer.component.css']
})
export class AddProducerComponent implements OnInit {

  producer: any;

  constructor(
    private adminService: AdminService) { }

  ngOnInit() {}

  addProducer(form: NgForm) {
    const producer = form.value;
    this.adminService.createProducer(producer).subscribe((res) => {
      this.producer = res;
    });
  }

}
