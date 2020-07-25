import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuardGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (sessionStorage.getItem('sessionId') === null) {
      return true;
    }
    this.router.navigate(['/dashboard']);
    return false;
  }
}
