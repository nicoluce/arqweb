export class User {
  username: string;
  password: string;
  role: UserRole;

  constructor(username: string, password: string, role: UserRole) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  public isAdmin(this:User): boolean {
    return UserRole.ADMIN === this.role;
  }
}

export enum UserRole {
  ADMIN,
  NORMAL
}
