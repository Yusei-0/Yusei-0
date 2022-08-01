import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonLargeIconComponent } from './components/button-large-icon/button-large-icon.component';
import { TwitComponent } from './components/twit/twit.component';



@NgModule({
  declarations: [
    HomeComponent,
    ButtonLargeIconComponent,
    TwitComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
