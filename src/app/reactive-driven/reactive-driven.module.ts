import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveDrivenRoutingModule } from './reactive-driven-routing.module';
import { ReactiveDrivenComponent } from './reactive-driven.component';


@NgModule({
  declarations: [
    ReactiveDrivenComponent
  ],
  imports: [
    CommonModule,
    ReactiveDrivenRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReactiveDrivenModule { }
