import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupPage } from './signup-page/signup.page';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SignupPage,
    FormComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SignupModule { }
