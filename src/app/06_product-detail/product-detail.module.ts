import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailPage } from './product-page/product-detail.page';
import { ProductDetailCardComponent } from './product-detail-card/product-detail-card.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';


@NgModule({
  declarations: [
    ProductDetailPage,
    ProductDetailCardComponent,
    BreadcrumbComponent,
    ProductGalleryComponent,
    ProductDescriptionComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule
  ]
})
export class ProductDetailModule { }
