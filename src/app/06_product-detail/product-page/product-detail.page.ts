import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/core/iproduct';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss']
})
export class ProductDetailPage implements OnInit {

  product!: IProduct;

  constructor(private products: ProductsService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe(param => {  
      this.products.getID(param['id']).subscribe(
        prod => this.product = prod
      )
    })
  }
}
