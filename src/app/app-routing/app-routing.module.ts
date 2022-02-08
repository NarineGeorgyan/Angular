import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { TodoComponent } from '../todo/todo.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


 const router: Route[]=[
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home',
  
  },
   {
     path:'home',
     component: HomeComponent
   },
   {
    path:'users',
    component: UsersComponent
  },
  {
    path:'todo list',
    component: TodoComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
 ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(router)
  ], 
  exports:[RouterModule], 
})
export class AppRoutingModule { }
