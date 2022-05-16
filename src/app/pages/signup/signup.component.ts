import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Cliente } from '../../interfaces/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  dni = new FormControl('', [Validators.required, Validators.pattern('[0-9]{8}[A-Z]')])
  email = new FormControl('', [Validators.required, Validators.email]);
  pwd = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}')]);
  pwd2 = new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}')]);
  name = new FormControl('',Validators.required);
  constructor(private _loginService:LoginService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  async register(){
    let cliente:Cliente = {
      dni: this.dni.value,
      nombre: this.name.value,
      email: this.email.value,
      contraseña: this.pwd.value
    }
    const respuesta = await this._loginService.crearCliente(cliente);
    console.log(respuesta);
    if(respuesta.status == 'ok'){
      this._router.navigate(['login']);
    }
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
  getErrorMessageName() {
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
  getErrorMessagePWD2() {
    if (this.pwd2.hasError('required')) {
      return 'Debes introducir un valor';
    }
    else if (this.pwd2.hasError('pattern')) {
      return 'La contraseña debe contener 8 dígitos, minúsculas, mayúsculas, números y carácteres especiales';
    }
    return '';
  }

  submit(){
    
  }
}
