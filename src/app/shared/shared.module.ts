import { DefaultComponent } from './component/default/default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';



@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class SharedModule { }
