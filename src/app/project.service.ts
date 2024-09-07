import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }

  getRepos(namesArray: string[]){
    let jsons: Observable<any>[] = [];
    namesArray.forEach(element => {
      jsons.push(this.http.get<any>(`https://api.github.com/repos/${element}`));
    });
    return jsons;
  }
}
