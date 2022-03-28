import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveDrivenComponent } from './reactive-driven.component';

const routes: Routes = [{ path: '', component: ReactiveDrivenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveDrivenRoutingModule { }
