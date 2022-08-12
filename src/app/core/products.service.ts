import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private prodData = 'http://localhost:4201/products';

  constructor(private http:HttpClient) { }

  getAllProd(type:string) {
    return this.http.get<IProduct[]>(this.prodData + '?type=' + type)
  }

  getID(id:number) {
    return this.http.get<IProduct>(this.prodData + '/' + id)
  }

  addProd(product:IProduct){
    return this.http.post(this.prodData, product)
  }

  updateProd(product:IProduct){
    return this.http.put(this.prodData + product.qty, product)
  }

  deleteProd(product:IProduct){
    return this.http.delete(this.prodData + product.id)
  }
}
