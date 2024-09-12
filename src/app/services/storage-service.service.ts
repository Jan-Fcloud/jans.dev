import { Injectable } from '@angular/core';

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

  get<Type extends Base>(model: Type): string[] | null {
    let item = this.storage.getItem(model.identifier);
    return item ? JSON.parse(item) : null;
  }

  set<Type extends Base>(model: Type, data: Type[] | Type): void {
    this.storage.setItem(model.identifier, JSON.stringify(data));
  }
}
