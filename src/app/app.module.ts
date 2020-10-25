import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserComponent } from './components/user/user.component';
import { UserNotFoundComponent } from './components/user-not-found/user-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    HeaderComponent,
    MessageComponent,
    MessageListComponent,
    UsersComponent,
    UserDetailComponent,
    UserComponent,
    UserNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
