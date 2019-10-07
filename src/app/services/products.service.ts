import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cargando = true;

  constructor( private http: HttpClient ) {
    this.loadProducts();
   }

  private loadProducts() {
    this.http.get('https://angular-website-6381b.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Product[]) => {
        console.log(resp);
        this.cargando = false;
      });
  }
}
