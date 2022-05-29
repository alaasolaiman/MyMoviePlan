
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private content = new BehaviorSubject<string>("");
  public shareSearch = this.content.asObservable();

  constructor() { }

  updateData(search: string){
    this.content.next(search);
  }

}
