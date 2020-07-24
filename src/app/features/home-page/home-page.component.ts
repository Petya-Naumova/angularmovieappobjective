import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private authService: AuthService) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      console.log(data);
      if (data.request_token) {
        // tslint:disable-next-line:no-shadowed-variable
        this.authService.getSessionId(data.request_token).subscribe(data => {
          console.log(data);
        });
      }
    });
  }

}
