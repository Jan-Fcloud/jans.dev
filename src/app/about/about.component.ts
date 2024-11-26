import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoCardComponent } from '../repo-card/repo-card.component';
import { Repo, repoData } from 'src/public/repos';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [RepoCardComponent, CommonModule],
})
export class AboutComponent implements OnInit {
  constructor() {}

  repos$: Repo[] = new repoData().data;
  ngOnInit() {
    this.repos$ = new repoData().data;
  }
}
