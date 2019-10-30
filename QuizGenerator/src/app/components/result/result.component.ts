import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AppState } from '../../state/state/app.state'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  score: number;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { 
    store.select('currentUser').subscribe(data => {
      if(data.userName == ""){
        console.log("REACHED");
        router.navigate(['/login']);
      }
    });
    this.score = this.router.getCurrentNavigation().extras.state.score;
  }

  ngOnInit() {
  }

  returnHome():void{
    this.router.navigate(['/home']);
  }

}
