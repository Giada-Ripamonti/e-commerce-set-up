import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePage} from './profile-page/profile.page';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CustomSizeComponent } from './custom-size/custom-size.component';

@NgModule({
  declarations: [
    ProfilePage,
    UserDetailComponent,
    CustomSizeComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule
  ]
})
export class ProfileModule { }
