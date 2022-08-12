import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/core/iproduct';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements OnInit {

  @Input() product!: IProduct;
  prodImg!: [];

  constructor(private products: ProductsService, private routes: ActivatedRoute) { }

  ngOnInit(): void {

  }
}
