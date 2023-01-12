import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserAccountsComponent } from './admin-dashboard/user-accounts/user-accounts.component';
import { SidebarComponent } from './admin-dashboard/sidebar/sidebar.component';
import { PostManagementComponent } from './admin-dashboard/post-management/post-management.component';
import { DashboardComponent } from './admin-dashboard/dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-dashboard/admin-login/admin-login.component';
const appRoutes: Routes = [
  {path: '', component: HomeComponent}, //localhost:4200/
  {path: 'home', component: HomeComponent}, //localhost:4200/home
  {path: 'login', component: LoginComponent}, //localhost:4200/login
  {path: 'register', component: RegisterComponent}, //localhost:4200/register
  {path: 'admin', component: AdminDashboardComponent}, //localhost:4200/admin
  {path: 'admin/dashboard', component: DashboardComponent}, //localhost:4200/admin
  {path: 'admin/posts', component: PostManagementComponent}, //localhost:4200/admin/posts
  {path: 'admin/users', component: UserAccountsComponent}, //localhost:4200/admin/users
  {path: 'admin/login', component: AdminLoginComponent}, //localhost:4200/admin/users
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    PostManagementComponent,
    HomeComponent,
    UserAccountsComponent,
    SidebarComponent,
    DashboardComponent
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
