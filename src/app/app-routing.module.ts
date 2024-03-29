import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DesktopGuard } from './shared/guards/desktop.guard';


const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    loadChildren : () => import('./home/home.module').then(m=> m.HomeModule),
    canActivate: [DesktopGuard]
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m=> m.ContactModule)  
  },
  {
    path: 'education',
    loadChildren: () => import('./education/education.module').then(m=> m.EducationModule)  
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills.module').then(m=> m.SkillsModule)
  },
  {
    path: 'desktop-error',
    loadChildren: ()=> import('./desktop-error/desktop-error.module').then(m => m.DesktopErrorModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
