import { Component, OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

import { RepoCardComponent } from '../repo-card/repo-card.component';
import { Repo, repoData } from 'src/public/repos';
import { Observable, of } from 'rxjs';


@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [RepoCardComponent, NgFor, CommonModule],
})
export class AboutComponent implements OnInit {
  constructor() {}

  repos$: Repo[] = new repoData().data;
  ngOnInit() {
    this.repos$ = new repoData().data
  }


}
