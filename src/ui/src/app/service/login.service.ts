import {EventEmitter, Injectable, Output} from '@angular/core';
import {User, UserRole} from "../domain/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  @Output() userLogged = new EventEmitter<User>();
  @Output() userLoggedOut = new EventEmitter<User>();

  //TODO: remove
  constructor() {
    //Simulate admin login
    let admin = new User("Fernet", "pass", UserRole.ADMIN);
    this.userLogged.emit(admin);
  }


  public login(user: User): void {
    //TODO: call backend
    localStorage.setItem("loggedUser", JSON.stringify(user));
    this.userLogged.emit(user);
  }

  public signUp(user: User): void {
    //TODO: call backend
  }

  public logOut(): void {
    let user = <User>JSON.parse(localStorage.getItem("loggedUser"));
    localStorage.removeItem("loggedUser");
    this.userLoggedOut.emit(user); //Emit who logged out
  }
}
