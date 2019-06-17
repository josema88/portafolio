import { Component, OnInit } from '@angular/core';
import { InfopageService } from 'src/app/services/infopage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoPageService: InfopageService) { }

  ngOnInit() {
  }

}
