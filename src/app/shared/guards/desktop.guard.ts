import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesktopGuard implements CanActivate {

  constructor(
    private router: Router
  )
  {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let screenWidth = screen.width;

      if(screenWidth > 540){
        return this.router.navigate(['/desktop-error']).then(() => false);
      }

    return true;
  }
  
}
