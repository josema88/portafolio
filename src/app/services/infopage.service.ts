import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  info: InfoPage = {};
  loaded = false;

  constructor( private http: HttpClient ) {

    console.log('Servicio info pagina');

    //Read
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage) => {
        this.loaded = true;
        this.info = resp;
        console.log(this.info.twitter);
      } );

  }
}
