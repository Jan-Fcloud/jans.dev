import { AfterViewInit, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { Observable, of, timeout } from 'rxjs';

import { RepoCardComponent } from '../repo-card/repo-card.component';
import { ProjectService } from '../services/project.service';
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
  repos$: Observable<any> = of([]);

  repos: WritableSignal<string[]> = signal([]);

  // https://api.github.com/repos/<organization>/<project>

  //repos: any[] = [];

  //jsonData$ : Observable<any>[] = [];

  ngOnInit() {
    console.log('ProjectsComponent: ngOnInit');
    if (!this.StorageService.exists('repos')) {
      console.log("ProjectsComponent: getRepos");
      this.repos$ = this.projectService.getRepos();
    }else{
      this.repos.set(JSON.parse(this.StorageService.get("repos")));
      this.repos$ = of(this.repos);
    }
    console.log(this.repos);
  }
}
