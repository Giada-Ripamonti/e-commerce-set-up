import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/core/iproduct';
import { ProductsService } from 'src/app/core/products.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() prodList!: IProduct[];

  constructor(private products:ProductsService, private router : ActivatedRoute) { }

  ngOnInit(): void {
   
  }
}
