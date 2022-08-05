import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonLargeIconComponent } from './components/button-large-icon/button-large-icon.component';
import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { TwitComponent } from './components/twit/twit.component';



@NgModule({
  declarations: [
    HomeComponent,
    ButtonLargeIconComponent,
    TwitComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
