import { Injectable } from '@angular/core';
import { User, UserInstance } from '../../interfaces/user';
import { Verification } from "../../interfaces/verification"
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppState } from '../../state/state/app.state'
import * as LoginActions from '../../state/actions/login.action'
import { Store } from '@ngrx/store'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:3000/users?username='

  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store<AppState>
    ) { }


  loginUser(user: User){
    let url = this.baseUrl + user.userName + "&password=" + user.password;
    console.log(url);
    this.http.get<Verification>(url).subscribe(data => {
      if(data.verified == true){
        this.store.dispatch(new LoginActions.Login({userName: user.userName, score:0}));
        this.router.navigate(['home']);
      }
    });
  }

  logout(){
    this.store.dispatch(new LoginActions.Logout());
    this.router.navigate(['login']);
  }
}
