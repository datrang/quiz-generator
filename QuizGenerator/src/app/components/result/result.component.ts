import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  score: number;

  constructor(
    private router: Router
  ) { 
    this.score = this.router.getCurrentNavigation().extras.state.score;
  }

  ngOnInit() {
  }

  returnHome():void{
    this.router.navigate(['/home']);
  }

}
