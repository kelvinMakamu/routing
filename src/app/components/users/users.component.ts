import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
// import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

users: User[];

constructor(private activatedRoute: ActivatedRoute) { }

ngOnInit(): void {
  // this.users = this.userService.getUsers();
  this.activatedRoute.data.forEach(data => this.users = data.users);
}

}
