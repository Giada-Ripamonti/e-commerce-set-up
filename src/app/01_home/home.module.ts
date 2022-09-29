import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home-page/home.page';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    HomePage,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
