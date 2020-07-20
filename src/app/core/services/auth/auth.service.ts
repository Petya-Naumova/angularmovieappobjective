import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public login(userInfo: User) {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }
}
