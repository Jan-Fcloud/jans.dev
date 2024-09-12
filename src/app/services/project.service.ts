import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { forkJoin, map, Observable } from 'rxjs';

import { LoadingComponent } from '../loading/loading.component';
import { StorageService } from './storage-service.service';
import { Repo } from './models/repo';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient, private LoadingComponent: LoadingComponent, private Storage: StorageService) { 
  }

    getProjects(): void {
      this.LoadingComponent.show();
      if(!this.Storage.exists("repos")){
        
      }

      
    }
    

    getRepoData(repoNames: string[]): Observable<any[]> {
      const requests = repoNames.map(name => 
        this.http.get(`https://api.github.com/repos/${name}`).pipe(
          map(data => {
            return data;
          })
        )
      );
      return forkJoin(requests);
    }
}
