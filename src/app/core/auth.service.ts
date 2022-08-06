import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged = false;

  constructor() { }

  isAutenticated(): boolean {
    return this.logged;
  }

  login() {
    this.logged = true;
  }

  logout() {
    this.logged = false;
  }
}
