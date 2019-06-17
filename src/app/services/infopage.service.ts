import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  info: InfoPage = {};
  loaded = false;
  team: any[] = [];

  constructor( private http: HttpClient ) {

    console.log('Servicio info pagina');
    this.loadInfo();
    this.loadTeam();

  }

  private loadInfo() {
    //Read
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage) => {
        this.loaded = true;
        this.info = resp;
      } );
  }

  private loadTeam() {
    this.http.get('https://angular-website-6381b.firebaseio.com/team.json')
    .subscribe( (resp: any[] ) => {
      this.team = resp;
      console.log(this.team);
    } );
  }
}
