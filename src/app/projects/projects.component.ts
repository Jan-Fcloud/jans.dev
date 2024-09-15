import { Component, OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

import { RepoCardComponent } from '../repo-card/repo-card.component';
import { Repo, repoData } from 'src/public/repos';
import { Observable, of } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [RepoCardComponent, NgFor, CommonModule],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  repos$: Repo[] = new repoData().data;
  ngOnInit() {
    this.repos$ = new repoData().data
  }
}
