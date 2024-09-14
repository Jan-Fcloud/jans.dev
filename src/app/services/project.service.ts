import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { concatMap, forkJoin, from, map, mergeMap, Observable, of, switchMap, tap, timeout } from 'rxjs';

import { LoadingComponent } from '../loading/loading.component';
import { StorageService } from './storage-service.service';
import { Repo } from './models/repo';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient, private Storage: StorageService) { 
  }

    getProjects(): Observable<any> {
      console.log("ProjectService: getProjects");
      if(!this.Storage.exists("repos")){
        const repos = this.http.get('https://raw.githubusercontent.com/Jan-Fcloud/jans.dev/main/temp/repo-display.json').pipe(
          map(data => {
            return data;
          })
        );
        return repos;
      }
      return new Observable();
    }

    fetchRepoData(repoURL : string){
      const url = `https://api.github.com/repos/${repoURL}`;
      return this.http.get(url);
    }

    getRepos(): Observable<any> {
      console.log("ProjectService: get");
  
      return this.getProjects().pipe(
        mergeMap(data => {
          const requests = Object.values(data).map((repoPath) =>
            this.fetchRepoData(repoPath as string)
          );
          return forkJoin(requests);
        })
      );
    }
      
}
