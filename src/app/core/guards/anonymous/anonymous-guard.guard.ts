import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuardGuard implements CanActivate {
  isLoggedIn = true;
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // If Anonymous, can access the page
    if (!this.isLoggedIn) { return true; }
    // Else force redirect to Dashboard
    console.log('this.isLoggedIn: ', this.isLoggedIn);
    this.router.navigate(['/dashboard']);
    return false;
  }
}
