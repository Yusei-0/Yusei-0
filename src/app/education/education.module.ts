import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { EducationRoutingModule } from './education-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PeriodComponent } from './components/period/period.component';
import { EducationImgComponent } from './components/education-img/education-img.component';



@NgModule({
  declarations: [
    EducationComponent,
    PeriodComponent,
    EducationImgComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    SharedModule
  ]
})
export class EducationModule { }
