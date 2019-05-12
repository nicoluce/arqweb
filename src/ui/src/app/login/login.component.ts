import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private loginControl: FormGroup;
  private signUpControl: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginControl = new FormGroup(
      {
        username: new FormControl('', [Validators.required, Validators.maxLength(30)]),
        password: new FormControl('', [Validators.required, Validators.maxLength(30)])
      }
    );

    this.signUpControl = new FormGroup(
      {
        username: new FormControl('', [Validators.required, Validators.maxLength(30)]),
        password: new FormControl('', [Validators.required, Validators.maxLength(30)])
      }
    );

  }

  private login(loginData: any): void {

  }

  private signUp(signupData: any): void {

  }



}
