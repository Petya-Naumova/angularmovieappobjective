import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {

  }

  logout(): void {

    sessionStorage.removeItem('sessionId');
    this.router.navigate(['']);
  }
  isLogoutVisible() {
    return sessionStorage.getItem('sessionId') !== null;
  }
  isSearchVisible() {
    return sessionStorage.getItem('sessionId') !== null;
  }
}
