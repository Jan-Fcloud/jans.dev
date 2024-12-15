import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoCardComponent } from '../repo-card/repo-card.component';
import { Repo, repoData } from 'src/public/repos';
import {SeoService} from "../seo.service";

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [RepoCardComponent, CommonModule],
})
export class AboutComponent implements OnInit {
  constructor(private seo: SeoService) {}

  repos$: Repo[] = new repoData().data;
  ngOnInit() {
    this.repos$ = new repoData().data;
    this.seo.updateMetadata('About', 'This is the about page');
    this.seo.setCanonicalURL('http://localhost:4000/about');
  }
}
