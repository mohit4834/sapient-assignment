import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './launch.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LaunchComponent],
  imports: [
    CommonModule,
    SharedModule,
    LaunchRoutingModule
  ]
})
export class LaunchModule { }
