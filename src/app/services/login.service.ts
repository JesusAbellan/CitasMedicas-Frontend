import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Cliente } from '../interfaces/cliente';
import { RespuestaRegistro } from '../interfaces/respuestaRegistro';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient, private _router:Router) { }

  public url = 'http://localhost:8080/api/';
  public tokenAlmacenado:string = '';

  crearCliente(cliente:any){
    return new Promise<RespuestaRegistro>((resolve, reject) => {
      this._http.post<RespuestaRegistro>(`${this.url}registroCliente`,cliente).subscribe(resp =>{
        resolve(resp);
      }, err => {
        console.log('Hay un error creando el cliente');
        reject(err);
      })
    })
  }
}
