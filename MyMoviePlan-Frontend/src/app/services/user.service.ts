import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<object> {
    return this.http.get("http://localhost:8080/User/allUsers");
  }

  postUser(user:any):Observable<object> {
    return this.http.post("http://localhost:8080/User/addUser",user);
  }

    getUser(id:number):Observable<object>
  {
    return this.http.get(`http://localhost:8080/User/get/${id}`)
  }


  updateUser(id:number, user:any):Observable<object>
  {
    return this.http.put(`http://localhost:8080/User/update/${id}`,user)
  }

   deleteUser(id:number):Observable<object>
  {
    return this.http.delete(`http://localhost:8080/User/delete/${id}`)
  }

}
