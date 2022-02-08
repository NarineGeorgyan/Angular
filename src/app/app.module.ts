import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    TodoComponent,
    LoginComponent,
    RegisterComponent, 
    
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
