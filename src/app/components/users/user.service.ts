import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usersURL : string = "//jsonplaceholder.typicode.com/users";
  private _postURL  : string = "//jsonplaceholder.typicode.com/posts";

  private _users: any;
  
  getUsers(): Observable<any>{
    let headers  = new HttpHeaders().set('Authorization','Bearer your-auth-token-here');
    return this.httpClient.get<any>(this._usersURL, { headers })
    .map(users => {
      return users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
          phone: user.phone,
          street: user.address.street,
          suite: user.address.suite
        }
      })
    });
  }

  getUserById(id: number): Observable<any>{
    let headers  = new HttpHeaders().set('Authorization','Bearer your-auth-token-here');
    return this.httpClient.get<any>(`${this._usersURL}/${id}`,{ headers })
    .retry(3)
    .catch(err => {
      console.log("Gotten an error", err);
      return err;
    });
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
    let headers  = new HttpHeaders().set('Authorization','Bearer your-auth-token-here');
    let params = new HttpParams().set('userId',id.toString());
    return this.httpClient.get<any>(this._postURL,{ headers, params });
  }

  constructor(private httpClient: HttpClient) { }
}
