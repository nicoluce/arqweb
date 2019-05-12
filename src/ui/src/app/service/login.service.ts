import {EventEmitter, Injectable, Output} from '@angular/core';
import {User} from "../domain/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  @Output() userLogged = new EventEmitter<User>();

  constructor() { }

  public login(user: User): void {
    //TODO: call backend
    localStorage.setItem("loggedUser", JSON.stringify(user));
    this.userLogged.emit(user);
  }

  public signUp(user: User): void {
    //TODO: call backend
  }
}
