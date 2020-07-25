import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (sessionStorage.getItem('sessionId') === null) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
