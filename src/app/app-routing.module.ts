import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './01_home/home-page/home.page';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomePage },

  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: 'profile', canActivate: [AuthGuard], loadChildren: () => import('./04_profile/profile.module').then(m => m.ProfileModule) },
  
  { path: 'login', loadChildren: () => import('./02_login/login.module').then(m => m.LoginModule) },
  
  { path: 'signup', loadChildren: () => import('./03_signup/signup.module').then(m => m.SignupModule) },
  
  { path: 'products', loadChildren: () => import('./05_products/products.module').then(m => m.ProductsModule) },
  
  { path: 'product-detail/:id', loadChildren: () => import('./06_product-detail/product-detail.module').then(m => m.ProductDetailModule) },
  
  { path: 'credits', loadChildren: () => import('./credits/credits.module').then(m => m.CreditsModule) },

  { path: '**', loadChildren: () => import('./err404/err404.module').then(m => m.Err404Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }