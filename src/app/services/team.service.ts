import { Injectable } from '@angular/core';
import { TeamMember } from '../interfaces/team-members';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private _http:HttpClient) { }
  
  getTeamMembers(){
    return new Promise<TeamMember[]>((resolve,reject) => {
      const url = '../../assets/team.json';
      this._http.get<TeamMember[]>(url).subscribe(teamMember =>{
        resolve(teamMember);
      }, err =>{
        console.log('Hay un error trayendo los miembros del equipo');
        reject(err);
      });
    });
  }
}
