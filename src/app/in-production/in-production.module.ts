import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InProductionRoutingModule } from './in-production-routing.module';
import { InProductionComponent } from './in-production.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InProductionComponent
  ],
  imports: [
    CommonModule,
    InProductionRoutingModule,
    SharedModule
  ]
})
export class InProductionModule { }
