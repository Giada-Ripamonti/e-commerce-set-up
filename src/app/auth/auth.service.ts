import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { ISign } from './interfaces/isign';
import { IauthData } from './interfaces/iauth-data';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubject = new BehaviorSubject<IauthData | null>(null);
  private urlJsonServer = 'http://localhost:4201';
  helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUserLogin();
  }

  restoreUserLogin() {
    const json = localStorage.getItem('isAuthenticated');
    if(json) {
      const user = JSON.parse(json);
      if(this.helper.isTokenExpired(user.accessToken)) {
        localStorage.removeItem('isAuthenticated');
        return
      } else {
        this.authSubject.next(user);
      }
    }
  }

  login(user: ISign) {
    return this.http.post<IauthData>(this.urlJsonServer+'/login', user).pipe(
      tap(data => {
        this.authSubject.next(data);
        localStorage.setItem('isAuthenticated', JSON.stringify(data));
      })
    )
  }

  signup(user: ISign) {
    return this.http.post(this.urlJsonServer+'/register', user);
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/home']);
  }

}