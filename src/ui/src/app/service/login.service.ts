import {EventEmitter, Injectable, Output} from '@angular/core';
import {User, UserRole} from "../domain/user";
import {EMPTY, empty, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  @Output() userLogged = new EventEmitter<User>();
  @Output() userLoggedOut = new EventEmitter<User>();

  constructor() {
  }


  private loggedUserKey = "loggedUser";

  public login(user: User): void {
    //TODO: call backend

    localStorage.setItem(this.loggedUserKey, JSON.stringify(user));
    this.userLogged.emit(user);
  }

  public signUp(user: User): void {
    //TODO: call backend
  }

  public logOut(): void {
    let user = <User>JSON.parse(localStorage.getItem(this.loggedUserKey));
    localStorage.removeItem(this.loggedUserKey);
    this.userLoggedOut.emit(user); //Emit who logged out
  }

  public getLoggedUser(): Observable<User> {
    let loggedUserJson = localStorage.getItem(this.loggedUserKey);
    if (loggedUserJson) {
      let parsedJson = <User>JSON.parse(loggedUserJson);
      return of(new User(parsedJson.username, parsedJson.password, parsedJson.role));
    } else {
      return EMPTY;
    }
  }
}
