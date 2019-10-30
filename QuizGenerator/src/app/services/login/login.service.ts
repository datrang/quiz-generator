import { Injectable } from '@angular/core';
import { User, UserInstance } from '../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppState } from '../../state/state/app.state'
import * as LoginActions from '../../state/actions/login.action'
import { Store } from '@ngrx/store'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private mockUrl = '../../../assets/mockData/users/'

  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store<AppState>
    ) { }


  loginUser(user: User){
    let url = this.mockUrl + user.userName + ".json" 
    this.http.get<User>(url).subscribe(data => {
      if(user.password == data.password){
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
