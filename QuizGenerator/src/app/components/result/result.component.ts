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

  score: any;
  correctScore;
  incorrectScore;
  percentScore;

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
    this.correctScore = this.score.correct
    this.incorrectScore = this.score.incorrect
    this.percentScore = (this.correctScore*100)/(this.correctScore + this.incorrectScore);
  }

  ngOnInit() {
  }

  returnHome():void{
    this.router.navigate(['/home']);
  }

}
