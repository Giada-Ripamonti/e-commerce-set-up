import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Err404RoutingModule } from './err404-routing.module';
import { Err404Page } from './err404.page';


@NgModule({
  declarations: [
    Err404Page
  ],
  imports: [
    CommonModule,
    Err404RoutingModule
  ]
})
export class Err404Module { }
