import {EventEmitter, Injectable, Output} from '@angular/core';
import {User, UserRole} from "../domain/user";
import {EMPTY, empty, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  @Output() userLogged = new EventEmitter<User>();
  @Output() userLoggedOut = new EventEmitter<User>();

  constructor(private http: HttpClient) {
  }

  private loggedUserKey = "loggedUser";

  public login(user: User): void {
    //TODO: call backend
    // this.http.post(environment.baseUrl + "/login")

    window.localStorage.setItem(this.loggedUserKey, JSON.stringify(user));
    this.userLogged.emit(user);
  }

  public signUp(user: User): void {
    //TODO: call backend
  }

  public logOut(): void {
    let user = <User>JSON.parse(window.localStorage.getItem(this.loggedUserKey));
    window.localStorage.removeItem(this.loggedUserKey);
    this.userLoggedOut.emit(user); //Emit who logged out
  }

  public getLoggedUser(): Observable<User> {
    let loggedUserJson = window.localStorage.getItem(this.loggedUserKey);
    if (loggedUserJson) {
      let parsedJson = <User>JSON.parse(loggedUserJson);
      return of(new User(parsedJson.username, parsedJson.password, parsedJson.role));
    } else {
      return EMPTY;
    }
  }
}
