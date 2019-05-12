import {Component, OnInit} from '@angular/core';
import {LoginService} from "../service/login.service";
import {User, UserRole} from "../domain/user";

@Component({
  selector: 'app-navigation-toolbar',
  templateUrl: './navigation-toolbar.component.html',
  styleUrls: ['./navigation-toolbar.component.sass']
})
export class NavigationToolbarComponent implements OnInit {
  appTitle = 'Map Ui';
  loggedUser: User;

  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    this.loginService.userLogged.subscribe(
      (loggedUser: User) => {
        this.loggedUser = loggedUser;
      }
    );

    this.loginService.userLoggedOut.subscribe(
      () => {
        this.loggedUser = null;
      }
    );

  }

  private logOut(): void {
    this.loginService.logOut();
  }

  //TODO: delete
  private logAdmin() {
    this.loginService.login(new User("Fernet", "pass", UserRole.ADMIN));
  }

}
