import { Component, OnInit } from '@angular/core';
import { InfopageService } from '../../services/infopage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public infoService: InfopageService, private router: Router ) { 

  }

  ngOnInit() {
  }

  searchProduct( term: string ) {
    if(term.length < 1) {
      return;
    }
    this.router.navigate(['/search', term])
  }

}
