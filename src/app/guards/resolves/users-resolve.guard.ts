import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { UserService } from '../../components/users/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveGuard implements Resolve<User[]> {
  
  constructor(private userService:UserService){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): User[] {
    return this.userService.getUsers();
  }
  
}
