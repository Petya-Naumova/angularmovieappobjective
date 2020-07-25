import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-set-authentification',
  templateUrl: './set-authentification.component.html',
  styleUrls: ['./set-authentification.component.scss']
})
export class SetAuthentificationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {


  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {

      if (data.request_token) {
        console.log('data.request_token', data.request_token);

        // tslint:disable-next-line:no-shadowed-variable
        this.authService.getSessionId(data.request_token).subscribe(data => {
          console.log('data.session_id:', data.session_id);
          sessionStorage.setItem('sessionId', data.session_id);
          this.router.navigate(['/dashboard']);
        });
      }
    });
  }

}
