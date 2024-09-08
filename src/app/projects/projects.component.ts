import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs';
import { RepoCardComponent } from '../repo-card/repo-card.component';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [RepoCardComponent, NgFor]
})
export class ProjectsComponent implements OnInit{
  constructor(private projectService: ProjectService){}

  // https://api.github.com/repos/<organization>/<project>

  showProjects : string[] = [
    "Jan-Fcloud/jans.dev", 
    "Jan-Fcloud/W101-TriviaAnswers", 
    "Jan-Fcloud/media-dl-assistant", 
    "Jan-Fcloud/Unitypackage-Extract-and-Clean",
    "HakuSystems/EasyExtractUnitypackage",
  ];

  repos: any[] = [];

  jsonData$ : Observable<any>[] = [];

  ngOnInit() {
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
}
}
