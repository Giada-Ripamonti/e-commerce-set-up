import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPage } from './products-page/products.page';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
    ProductsPage,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
