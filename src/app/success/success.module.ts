import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessRoutingModule } from './success-routing.module';
import { SuccessComponent } from './success.component';


@NgModule({
  declarations: [SuccessComponent],
  imports: [
    CommonModule,
    SharedModule,
    SuccessRoutingModule
  ]
})
export class SuccessModule { }
