import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopErrorComponent } from './desktop-error.component';

const routes: Routes = [
  {
    path: '',
    component : DesktopErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopErrorRoutingModule { }
