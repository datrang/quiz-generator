import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/interfaces/quiz';
import { QuizService } from '../../services/quiz/quiz.service';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { map, flatMap } from 'rxjs/operators';
import { AppState } from '../../state/state/app.state'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizForm: FormGroup;
  error: string;
  quiz: Quiz = {
    area: "",
    questions: []
  };

  constructor(
    private quizService: QuizService, 
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    store.select('currentUser').subscribe(data => {
      if(data.userName == ""){
        router.navigate(['/login']);
      }
  })
  }

  ngOnInit() {
    this.quizForm = this.fb.group({
      answers: new FormArray([])
    });
    this.route.paramMap.pipe(
      map(params => params.get('area')),
      flatMap(area => this.quizService.getQuiz(area))
    ).subscribe(quiz => {
      this.quiz = quiz;
      for(let i = 0; i < this.quiz.questions.length; i++){
        this.quizAnswers.push(new FormControl ('', Validators.required));
      }
    });
  }

  get quizAnswers():FormArray{
    return this.quizForm.get("answers") as FormArray;
  }

  get questions(){
    return this.quiz.questions;
  }

  get answers(): number[]{
    return this.quizForm.value.answers;
  }

  onSubmit(){
    console.log(this.quizForm.value.answers);
    if(this.quizForm.valid){
      this.quizService.finishQuiz(this.quiz.area, this.quizForm.value.answers);
    }else{
      this.error = "Please answer all questions";
    }
  }

  private getScore(): number{
    let score:number = 0;
    for(let i = 0; i < this.quiz.questions.length; i++){
      if(this.questions[i].answer == this.answers[i]){
        score++;
      }
    }
    return score;
  }
}
