import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/core/iproduct';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  @Input() product!: IProduct;

  constructor(private products: ProductsService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
