import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  constructor(private http: HttpClient) { }
  getCards():Observable<object> {
    return this.http.get("http://localhost:8080/MovieCard/allCards");
  }

  postCards(card:any):Observable<object> {
    return this.http.post("http://localhost:8080/MovieCard/addCard",card);
  }

    getCard(id:number):Observable<object>
  {
    return this.http.get(`http://localhost:8080/MovieCard/card/${id}`)
  }


  updateCard(id:number, card:any):Observable<object>
  {
    return this.http.put(`http://localhost:8080/MovieCard/update/${id}`,card)
  }

   deleteCard(id:number):Observable<object>
  {
    return this.http.delete(`http://localhost:8080/MovieCard/delete/${id}`)
  }

}
