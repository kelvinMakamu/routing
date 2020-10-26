import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  user  : any;
  users : any;
  posts : any;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.userService.getUserById(+params.id).subscribe(foundUser=>{
        this.user = foundUser;
      });
    });
  }

  createUser(){
    this.user.id = null;
    this.userService.createUser(this.user).subscribe(
      user => alert(`A user has been created with an id ${user.id}`),
      err  => alert(`An error experienced: ${err}`),
      ()   => alert(`Creation of the user completed`)
    );
  }

  updateUser(){
    this.user.name ="kelvin makamu";
    this.user.email = "hkmm@gms.com";
    this.userService.updateUser(this.user).subscribe(
      user => alert(`A user has been updated`),
      err  => alert(`An error experienced: ${err}`),
      ()   => alert(`Updating of the user completed`)
    );
  }

  deleteUser(){
    this.userService.deleteUser(this.user.id).subscribe(
      user => alert(`A user has been deleted`),
      err  => alert(`An error experienced: ${err}`),
      ()   => alert(`Deleting of the user completed`)
    );
  }

  getUserPosts(){
    this.posts = this.userService.getUserPosts(this.user.id);
    // this.userService.getUserPosts(this.user.id).subscribe((posts)=> this.posts = posts);
  }

}
