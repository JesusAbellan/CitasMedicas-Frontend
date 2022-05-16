import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavbarItem } from '../interfaces/navbar-item';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private _http:HttpClient) { }

  getNavbarItems() {
    return new Promise<NavbarItem[]>((resolve, reject) =>{
      const url = '../../assets/navbarItems.json';
      this._http.get<NavbarItem[]>(url).subscribe(navbarItem =>{
        resolve(navbarItem);
      }, err =>{
        console.log('Hay un error trayendo nos navbarItems');
        reject(err);
      });
    });
  }
}
