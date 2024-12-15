import {Component, OnInit} from '@angular/core';

import { SeoService } from '../seo.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateMetadata('Home', 'This is the home page');
    this.seo.setCanonicalURL('http://localhost:4000/home');
  }
}
