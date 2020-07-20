import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarVisible = false;
  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/login') {
          this.navbarVisible = false;
        } else {
          this.navbarVisible = true;
        }
      }
    });
  }

  ngOnInit() {
  }

}
