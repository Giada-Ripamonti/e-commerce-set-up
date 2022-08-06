import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { HompagePage } from './home/hompage/hompage.page';

const routes: Routes = [
  {
    path: 'home',
    component: HompagePage
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  { 
    path: 'profile',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  
  { 
    path: '**', 
    loadChildren: () => import('./err404/err404.module').then(m => m.Err404Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
