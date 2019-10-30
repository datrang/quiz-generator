import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login/login.service'
import { trigger, state, style, animate, transition, keyframes} from '@angular/animations'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('loginState', [
      state('state1', style({
      })),
      transition('*=>state1', animate('500ms', keyframes([
        style({transform: 'translateX(-5%)', offset: 0.15}),
        style({transform: 'translateX(5%)', offset: 0.30}),
        style({transform: 'translateX(-5%)', offset: 0.45}),
        style({transform: 'translateX(5%)', offset: 0.60}),
        style({transform: 'translateX(-5%)', offset: 0.75}),
        style({transform: 'translateX(5%)', offset: 0.8}),
        style({transform: 'translateX(-5%)', offset: 0.9}),
        style({transform: 'translateX(5%)', offset: 1.0}),
      ])))
    ])
  ]
})
export class LoginComponent implements OnInit {

  error: string;
  loginForm :FormGroup
  state:string;
  @Input() position;

  constructor(
    private fb: FormBuilder, 
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.error="";
  }

  get userName(){
    return this.loginForm.get('userName');
  }

  get password(){
    return this.loginForm.get('password');
  }

  loginUser(){
    this.loginService.loginUser(this.loginForm.value);
    setTimeout(() => {
      this.error = "Incorrect Credentials"
      this.errorAnimation();
    },  200);
    this.changeState(null);

  }

  errorAnimation(){
    for(let i = 0; i < 100; i++){
      this.changeState('state1');
    }
  }

  changeState(state: any){
    this.state= state;
  }
}