import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IauthData } from 'src/app/auth/interfaces/iauth-data';
import { ISign } from 'src/app/auth/interfaces/isign';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userData!: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const json = localStorage.getItem('isAuthenticated');
    if(json) {
      const user = JSON.parse(json);
      this.userData = user.user;
      console.log(this.userData);
    }  
  }
}
