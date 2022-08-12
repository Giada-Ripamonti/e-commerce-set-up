import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/core/iproduct';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() product!: IProduct; 

  constructor(private products: ProductsService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
