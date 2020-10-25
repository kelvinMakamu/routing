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
  
  user  : User[];
  users : User[];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.userService.getUserByIdViaREST(+params.id).subscribe(foundUser=>{
        this.user = foundUser;
      });
    });
  }

}
