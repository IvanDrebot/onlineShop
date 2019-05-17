import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-position',
  templateUrl: './category-position.component.html',
  styleUrls: ['./category-position.component.css']
})
export class CategoryPositionComponent implements OnInit {

  id: any = {};
  isShow: Boolean = false;
  field: any = [];

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.id = res;
    });
  }

  addField() {
   const res = window.prompt('Add new position:');
   this.field.push(res);
  }

  deleteField(item: any) {
    const index = this.field.findIndex(i => i === item);
    this.field.splice(index, 1);
  }
}
