import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-medic',
  templateUrl: './signup-medic.component.html',
  styleUrls: ['./signup-medic.component.scss']
})
export class SignupMedicComponent implements OnInit {

  dni = new FormControl('', [Validators.required, Validators.pattern('[0-9]{8}[A-Z]')])
  email = new FormControl("", [Validators.required, Validators.email]);
  pwd = new FormControl("", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}')]);
  pwd2 = new FormControl("", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}')]);
  name = new FormControl("",Validators.required);
  speciality = new FormControl("",Validators.required);
  
  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Debes introducir un valor';
    }
    else if (this.email.hasError('email')) {
      return 'El email no es válido';
    }
    return '';
  }
  getErrorMessageRequired() {
    if (this.email.hasError('required')) {
      return 'Debes introducir un valor';
    }
    return '';
  }
  getErrorMessageDNI() {
    if (this.dni.hasError('required')) {
      return 'Debes introducir un valor';
    }
    else if (this.dni.hasError('pattern')) {
      return 'DNI no válido';
    }
    return '';
  }
  getErrorMessagePWD() {
    if (this.pwd.hasError('required')) {
      return 'Debes introducir un valor';
    }
    else if (this.pwd.hasError('pattern')) {
      return 'La contraseña debe contener 8 dígitos, minúsculas, mayúsculas, números y carácteres especiales';
    }
    return '';
  }

  submit(){
    
  }

}
