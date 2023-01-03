import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopErrorRoutingModule } from './desktop-error-routing.module';
import { DesktopErrorComponent } from './desktop-error.component';


@NgModule({
  declarations: [
    DesktopErrorComponent
  ],
  imports: [
    CommonModule,
    DesktopErrorRoutingModule
  ]
})
export class DesktopErrorModule { }
