import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonLargeIconComponent } from './components/button-large-icon/button-large-icon.component';
import { TwitComponent } from './components/twit/twit.component';
import { HomeRoutingModule } from './home-routing.module';
import { IconComponent } from './components/icon/icon.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomeComponent,
    ButtonLargeIconComponent,
    TwitComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
