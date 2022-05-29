import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private content = new BehaviorSubject<Array<string>>([]);
  public shareSearch = this.content.asObservable();

  constructor() { }

  Filter(filter: Array<string>){
    this.content.next(filter);
  }


}
