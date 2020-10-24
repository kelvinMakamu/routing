import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserNotFoundComponent } from './components/user-not-found/user-not-found.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent  },
  { path: 'about', component: AboutComponent },
  { path: 'blog',  component: BlogComponent  },
  { path: 'users', component: UsersComponent, children: [
    { path : ':id', component: UserDetailComponent },
    { path : '', component: UserNotFoundComponent }
  ] },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
