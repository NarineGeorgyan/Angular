import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  user = {};
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  });
  isClick=false;
  onSubmit():void{
    this.isClick=true;
    this.loginForm.controls['email'].disable()
    this.loginForm.controls['password'].disable()
     
    if(this.loginForm.disabled){
       setTimeout(()=>{
        
         this.user = this.loginForm.value
       
      },2000)
    }
  }


  getIMDBData() {
    console.log("hi")
    return this.http
    .get<any>('http://www.omdbapi.com/?apikey=YOUR_OMDB_KEY&s=car')

    .subscribe((response) => {
      console.log(response);
    }, (error) => {
      alert('Error Found!');
    });
  }
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
 
  
      
  
}
}

