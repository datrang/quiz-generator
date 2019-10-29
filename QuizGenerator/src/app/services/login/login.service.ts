import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private mockUrl = '../../../assets/mockData/users/'

  constructor(
    private router: Router,
    private http: HttpClient) { }

  loginUser(user: User){
    console.log(user);
    let url = this.mockUrl + user.userName + ".json"
    this.http.get<User>(url).subscribe(data => {
      if(user.password == data.password){
        this.router.navigate(['home']);
      }
    });
  }
}
