import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareInfoService {
  allow = false;
  private content = new BehaviorSubject<number>(0);
  public shareSearch = this.content.asObservable();
  
  constructor() { }

  exchangeData(cardID: number){
    this.content.next(cardID);
  }

}
