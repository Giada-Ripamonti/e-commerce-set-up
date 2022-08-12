import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {

 userName: string | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authSubject.subscribe(val => {
      if (val !== null) {
        this.userName = `Welcome ${val?.user.firstname}! =)`
      } else {
        this.userName = undefined
      }
    })
  }

  logout() {
    this.authService.logout();
  }
}
