import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllRoutingModule } from './all-routing.module';
import { AllComponent } from './all.component';


@NgModule({
  declarations: [AllComponent],
  imports: [
    CommonModule,
    SharedModule,
    AllRoutingModule
  ]
})
export class AllModule { }
