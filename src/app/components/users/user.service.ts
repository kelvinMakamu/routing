import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _baseUrl:string = "http://jsonplaceholder.typicode.com/users";

  private _users: any;
  
  getUsers(): any {
    return this._users;
  }
  
  getUserViaREST(): Observable<any>{
    return this.httpClient.get<any>(this._baseUrl);
  }

  getUserById(id: number): User {
    return this._users.find(user => user.id === id);
  }

  getUserByIdViaREST(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this._baseUrl}/${id}`);
  }

  constructor(private httpClient: HttpClient) { }
}
