import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { RepoCardComponent } from '../repo-card/repo-card.component';
import { ProjectService } from '../services/project.service';
import { Repo } from '../services/models/repo';
import { StorageService } from '../services/storage-service.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [RepoCardComponent, NgFor, LoadingComponent, CommonModule],
})
export class ProjectsComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private StorageService: StorageService
  ) {}

  loading$: boolean = true;
  repos$: Observable<any> | undefined;

  // https://api.github.com/repos/<organization>/<project>

  //repos: any[] = [];

  //jsonData$ : Observable<any>[] = [];

  ngOnInit() {
    console.log('ProjectsComponent: ngOnInit');
    if (!this.StorageService.exists('repos')) {
      this.repos$ = this.projectService.getRepoData();
    }

    this.repos$?.subscribe({
      next: (data) => {
        console.log(data);
        this.StorageService.set({ identifier: 'repos' }, data);
        this.loading$ = false;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
