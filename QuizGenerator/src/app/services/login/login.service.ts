import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  loginUser(user: User){
    console.log(user);
    if(user.userName === "admin" && user.password === "admin1"){
      this.router.navigate(['home']);
    }
  }
}
