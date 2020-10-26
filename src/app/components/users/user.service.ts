import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usersURL : string = "//jsonplaceholder.typicode.com/users";
  private _postURL  : string = "//jsonplaceholder.typicode.com/posts";

  private _users: any;
  
  getUsers(): Observable<any>{
    let headers  = new HttpHeaders().set('Authorization','Bearer your-auth-token-here');
    return this.httpClient.get<any>(this._usersURL, { headers });
  }

  getUserById(id: number): Observable<any>{
    let headers  = new HttpHeaders().set('Authorization','Bearer your-auth-token-here');
    return this.httpClient.get<any>(`${this._usersURL}/${id}`,{ headers });
  }

  createUser(user: any): Observable<any>{
    let headers  = new HttpHeaders().set('Authorization','Bearer your-auth-token-here');
    return this.httpClient.post<any>(this._usersURL,user,{ headers });
  }

  updateUser(user: any): Observable<any>{
    let headers  = new HttpHeaders().set('Authorization','Bearer your-auth-token-here');
    return this.httpClient.put<any>(`${this._usersURL}/${user.id}`,user,{ headers });
  }

  deleteUser(id: number): Observable<any>{
    let headers  = new HttpHeaders().set('Authorization','Bearer your-auth-token-here');
    return this.httpClient.delete<any>(`${this._usersURL}/${id}`, { headers});
  }

  getUserPosts(id: number): Observable<any>{
    let params = new HttpParams().set('userId',id.toString());
    return this.httpClient.get<any>(this._postURL,{ params });
  }

  constructor(private httpClient: HttpClient) { }
}
