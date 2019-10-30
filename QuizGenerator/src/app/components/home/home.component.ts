import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from '../../state/state/app.state'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  error: string = "";
  areaForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
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
    this.areaForm = this.fb.group({
      area: ['', Validators.required]
    });
  }

  get area(){
    return this.areaForm.get('area').value;
  }

  onSubmit(){
    if(this.areaForm.valid){
      this.router.navigate(['/quiz', this.area]);
    }else{
      this.error = "Please choose an area";
    }
  }

}
