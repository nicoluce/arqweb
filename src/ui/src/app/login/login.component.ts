import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../service/login.service";
import {User} from "../domain/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private loginControl: FormGroup;
  private signUpControl: FormGroup;

  constructor(private loginService: LoginService) { }

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
    this.loginService.login(new User(loginData.username, loginData.password));
  }

  private signUp(signupData: any): void {
    this.loginService.signUp(new User(signupData.username, signupData.password));
  }

}
