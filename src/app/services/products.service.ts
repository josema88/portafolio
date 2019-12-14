import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: Product[] = [];
  productsFiltered: Product[] = [];

  constructor( private http: HttpClient ) {
    this.loadProducts();
   }

  private loadProducts() {

    return new Promise( ( resolve, reject ) => {
      this.http.get('https://angular-website-6381b.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Product[]) => {
          this.products = resp;
          this.loading = false;
          resolve();
        });

    });

  }

  getProduct( id: string ) {
    return this.http.get(`https://angular-website-6381b.firebaseio.com/productos/${ id }.json`);
  }

  searchProduct( term: string) {

    if (this.products.length === 0) {
      this.loadProducts().then( () => {
        this.filterProducts(term);
      });
    } else {
      this.filterProducts(term);
    }

  }

  private filterProducts( term: string ) {
    term = term.toLocaleLowerCase();
    this.productsFiltered = [];
    this.products.forEach( prod => {
      const titleLower = prod.titulo.toLocaleLowerCase();
      if( prod.categoria.indexOf( term ) >= 0 || titleLower.indexOf( term ) >= 0 ) {
        this.productsFiltered.push(prod);
      }
    });
  }
}
