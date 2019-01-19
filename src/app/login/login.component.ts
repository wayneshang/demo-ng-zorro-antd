import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzFormControlComponent, NzFormDirective, NzInputModule ,NzFormItemComponent} from 'ng-zorro-antd';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    if (this.validateForm.valid) {
      console.log('Valid!');
      console.log(this.validateForm.value);
      this.router.navigate(['dashboard']);
    }
  }

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }
}
