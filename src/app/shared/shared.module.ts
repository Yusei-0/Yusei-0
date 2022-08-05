import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconComponent } from './components/icon/icon.component';



@NgModule({
  declarations: [
    NavbarComponent,
    IconComponent
  ],
  exports:[
    NavbarComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
