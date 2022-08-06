import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InProductionComponent } from './in-production.component';

const routes: Routes = [
  {
    path : '',
    component : InProductionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InProductionRoutingModule { }
