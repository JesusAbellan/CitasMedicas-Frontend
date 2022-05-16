import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar-service.service';
import { NavbarItem } from '../../interfaces/navbar-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarItems:NavbarItem[] = [];
  constructor(private _navbarService: NavbarService, public router:Router) { }

  async  ngOnInit() {
    try{
      this.navbarItems = await this._navbarService.getNavbarItems();
    }catch(error){
      alert("Vaya, algo raro ocurrió en la barra de navegación");
      console.log(error);
    }
  }
}
