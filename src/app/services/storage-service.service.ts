import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Base } from './models/base';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage = sessionStorage;
  constructor() { 
    if(!this.storage){
      throw new Error("Error loading storage");
    }
  }

  exists(id: string): boolean {
    return this.storage.getItem(id) !== null;
  }

  get(model: string): string {
    let item = this.storage.getItem(model);
    return item ? JSON.parse(item).toObservable() : null;
  }

  set<Type extends Base>(model: Type | string, data: Type[] | Type): void {
    if (typeof model === 'string') {
      this.storage.setItem(model, JSON.stringify(data));
      return;
    }
    this.storage.setItem(model.identifier, JSON.stringify(data));
  }
}
