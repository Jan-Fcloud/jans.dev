import { Component, inject, OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { RepoCardComponent } from '../repo-card/repo-card.component';
import { ProjectService } from '../services/project.service';
import { Repo } from '../services/models/repo';
import { StorageService } from '../services/storage-service.service';
import {LoadingComponent} from '../loading/loading.component';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [RepoCardComponent, NgFor, LoadingComponent, CommonModule]
})
export class ProjectsComponent implements OnInit{
  constructor(private projectService: ProjectService){}

  loading$: boolean = true;
  repos$: Observable<Repo[]> | undefined;

  // https://api.github.com/repos/<organization>/<project>

  //repos: any[] = [];

  //jsonData$ : Observable<any>[] = [];

  ngOnInit() {
    /*
    if(sessionStorage.getItem("ready") === null){
    this.projectService.getRepoData(this.showProjects).subscribe({
      next: (data: any[]) => {
        this.repos = data;
      },
      error: (error: any) => {
        console.error("Error: ", error);
      },
      complete: () => {
        sessionStorage["ready"] = true;
      }
    })
  }else{
    this.showProjects.forEach(element => {
      let repo = sessionStorage.getItem(element) as string;
      this.repos.push(JSON.parse(repo));
    });
  }
    */













  }
}
