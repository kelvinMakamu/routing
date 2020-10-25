import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserNotFoundComponent } from './components/user-not-found/user-not-found.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ConfirmationGuard } from './guards/confirmation/confirmation.guard';
import { MessageListComponent } from './components/message-list/message-list.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent  },
  { path: 'about', component: AboutComponent },
  { path: 'blog',  component: BlogComponent, canActivate:[AuthGuard] },
  { path: 'users', component: UsersComponent, canActivateChild:[AuthGuard], children: [
    { path : ':id', component: UserDetailComponent },
    { path : '', component: UserNotFoundComponent }
  ] },
  { path: 'messages', component: MessageListComponent, canDeactivate: [ConfirmationGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  providers: [ AuthGuard, ConfirmationGuard ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
