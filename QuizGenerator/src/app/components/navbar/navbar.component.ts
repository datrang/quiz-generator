import { Component, OnInit } from '@angular/core';
import { UserInstance } from '../../interfaces/user';
import { AppState } from '../../state/state/app.state'
import { Store } from '@ngrx/store'
import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: UserInstance;

  constructor(
      private store: Store<AppState>,
      private loginService: LoginService   
    ) {
    store.select('currentUser').subscribe(data => {
        this.currentUser = data;
    })
   }

  ngOnInit() {
  }

  logout(){
    this.loginService.logout();
  }

}
