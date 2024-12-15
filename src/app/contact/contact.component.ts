import {Component, OnInit} from '@angular/core';
import {SeoService} from "../seo.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateMetadata('Contact', 'This is the contact page');
    this.seo.setCanonicalURL('http://localhost:4000/contact');
  }
}
