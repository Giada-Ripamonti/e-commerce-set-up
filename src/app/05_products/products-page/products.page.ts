import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/core/iproduct';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {

  prodList: IProduct[] = [] ;
  prodType!: string;

  constructor(private products:ProductsService, private router : ActivatedRoute) { }

  ngOnInit(): void {
   this.router.params.subscribe(
      (resp:any) => {
        this.prodType = resp.type;
        this.products.getAllProd(resp.type).subscribe(
          prod => this.prodList = prod)
      }
    )    
  }

}
