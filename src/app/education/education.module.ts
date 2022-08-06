import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { EducationRoutingModule } from './education-routing.module';
import { PeriodComponent } from './components/period/period.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EducationComponent,
    PeriodComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    SharedModule
  ]
})
export class EducationModule { }
