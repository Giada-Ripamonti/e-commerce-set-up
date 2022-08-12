import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePage} from './profile-page/profile.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule
  ]
})
export class ProfileModule { }
