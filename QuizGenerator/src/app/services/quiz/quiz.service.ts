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

  private baseUrl = 'http://localhost:3000/?category=';

  getQuiz(area:string): Observable<Quiz>{

    let url = this.baseUrl + area;
    return this.http.get<Quiz>(url);
  }

  finishQuiz(area:string, answers:number[]){
    let url = this.baseUrl + area;
    this.http.post(url, {
      "category" : area,
      "answers"  : answers
    }).subscribe(score => 
      this.router.navigate(['/result'], {state:{score}})
    );
  }
  
}
