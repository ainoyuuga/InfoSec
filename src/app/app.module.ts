import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PostManagementComponent } from './post-management/post-management.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent}, //localhost:4200/
  {path: 'login', component: LoginComponent}, //localhost:4200/login
  {path: 'register', component: RegisterComponent}, //localhost:4200/register
  {path: 'admin', component: AdminDashboardComponent}, //localhost:4200/admin
  {path: 'userAccounts', component: UserManagementComponent}, //localhost:4200/users
  {path: 'posts', component: PostManagementComponent}, //localhost:4200/posts
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    UserManagementComponent,
    PostManagementComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
