import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl("",[Validators.required,Validators.email]);
  pwd = new FormControl("",[Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessageEmail(){
      if (this.email.hasError('required')) {
        return 'Debes introducir un valor';
      }
      else if (this.email.hasError('email')) {
        return 'El email no es válido';
      }
      return '';
  }

  getErrorMessagePWD(){
    if (this.email.hasError('required')) {
      return 'Debes introducir un valor';
    }
    return '';
}

  submit(){

  }
}
