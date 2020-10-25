import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  user  : any;
  users : User[];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.activatedRoute.params.subscribe((params)=>{
      this.user = this.userService.getUserById(+params.id);
    });
  }

}
