import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/interfaces/quiz';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
      private http: HttpClient,
      private router: Router
    ) { }

  private mockUrl = '../../../assets/mockData/quiz/';

  getQuiz(area:string): Observable<Quiz>{

    let url = this.mockUrl + area + ".json";

    return this.http.get<Quiz>(url);
  }

  finishQuiz(score:number){
    console.log(score);
    this.router.navigate(['/result'], {state:{score}});
  }
  
}
