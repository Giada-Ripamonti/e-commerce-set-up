import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404Page } from './err404.page';

const routes: Routes = [{ path: '', component: Err404Page }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Err404RoutingModule { }
