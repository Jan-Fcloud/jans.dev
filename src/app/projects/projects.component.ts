import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private projectService: ProjectService){}

  // https://api.github.com/repos/<organization>/<project>

  showProjects : string[] = [
    "Jan-Fcloud/jans.dev", 
    "Jan-Fcloud/W101-TriviaAnswers", 
    "Jan-Fcloud/media-dl-assistant", 
    "Jan-Fcloud/Unitypackage-Extract-and-Clean",
    "HakuSystems/EasyExtractUnitypackage",
  ];

  jsonData$ : Observable<any>[] = [];

  ngOnInit() {
    this.jsonData$ = this.projectService.getRepos(this.showProjects);
    // log the json data
    this.jsonData$.forEach(element => {
      element.subscribe(data => {
        console.log(data);
      });
    });
  }
}
