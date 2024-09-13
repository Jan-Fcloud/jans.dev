import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { forkJoin, map, Observable, switchMap } from 'rxjs';

import { LoadingComponent } from '../loading/loading.component';
import { StorageService } from './storage-service.service';
import { Repo } from './models/repo';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient, private LoadingComponent: LoadingComponent, private Storage: StorageService) { 
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
    

    getRepoData(): Observable<any[]> {
      console.log("ProjectService: get");
      this.LoadingComponent.show();
      // Step 1: Get repo names (Observable of names)
      return this.getProjects().pipe(
        // Step 2: Switch to the new observable of HTTP requests after getting repo names
        switchMap((repoNames: string[]) => {
          // Step 3: Map each repo name to an HTTP GET request
          const requests = repoNames.map(name => 
            this.http.get(`https://api.github.com/repos/${name}`).pipe(
              map(data => data) // You can transform the data here if needed
            )
          );
          // Step 4: Use forkJoin to wait for all requests to complete
          return forkJoin(requests);
        })
      );
    }
}
