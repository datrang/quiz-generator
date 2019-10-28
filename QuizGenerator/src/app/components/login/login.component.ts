import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  loginForm :FormGroup

  constructor(
    private fb: FormBuilder, 
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.error="";
  }

  get userName(){
    return this.loginForm.get('userName');
  }

  get password(){
    return this.loginForm.get('password');
  }

  loginUser(){
    this.loginService.loginUser(this.loginForm.value);
    this.error = "Incorrect Credentials";

    // console.log(this.userName.value + " " + this.password.value);
    // if(this.loginForm.valid && this.userName.value === "admin" && this.password.value === "admin1"){
    //   console.log("USER LOGGED IN");
    // }else{
    //   console.log("INCORRECT CREDENTIALS");
    //   this.error = "Incorrect Credentials";
    // }
  }

}
