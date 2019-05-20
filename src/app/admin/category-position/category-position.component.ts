import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilterServiceService} from '../../../services/filter-service.service';

@Component({
  selector: 'app-category-position',
  templateUrl: './category-position.component.html',
  styleUrls: ['./category-position.component.css']
})
export class CategoryPositionComponent implements OnInit {

  id: any = {};
  isShow: Boolean = false;

  constructor(
    private router: ActivatedRoute,
    private nextService: FilterServiceService
  ) { }

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.id = res;
    });
  }
}
