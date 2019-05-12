import { Injectable } from '@angular/core';
import {User} from "../domain/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login(user: User): void {
    //TODO: call backend
    localStorage.setItem("loggedUser", JSON.stringify(user));
  }

  public signUp(user: User): void {
    //TODO: call backend
  }
}
