import { Component, OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

import { RepoCardComponent } from '../repo-card/repo-card.component';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [RepoCardComponent, NgFor, CommonModule],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  repos: any[] = [];

  ngOnInit() {
    
  }
}
