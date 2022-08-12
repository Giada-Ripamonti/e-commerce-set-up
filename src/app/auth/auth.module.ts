import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../02_login/login-page/login.page';
import { SignupPage } from '../03_signup/signup-page/signup.page';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    LoginPage,
    SignupPage
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AuthModule,
    AuthGuard
  ]
})
export class AuthModule { }
