import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  error: string;
  areaForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.areaForm = this.fb.group({
      area: ['', Validators.required]
    });
  }

}
