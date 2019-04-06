import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhonesComponent} from './phones/phones.component';
import {DetailsPhoneComponent} from './phones/details-phone/details-phone.component';
import {MainRoutingModule} from '../../routing/mainRouting.module';

@NgModule({
  declarations: [
    PhonesComponent,
    DetailsPhoneComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    PhonesComponent,
    DetailsPhoneComponent
  ]
})
export class ProductModule { }
