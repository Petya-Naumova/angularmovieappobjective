import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }
  loginForm: FormGroup;
  isSubmitted  =  false;

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15),
        Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15),
        Validators.pattern(/^[a-zA-Z0-9]*$/)]]
    });
  }
  get formControls() { return this.loginForm.controls; }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value);
  }

}
