import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { TeamMember } from '../../interfaces/team-members';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team:TeamMember[] = [];
  constructor(private _teamService: TeamService) { }

  async ngOnInit() {
    try{
      this.team = await this._teamService.getTeamMembers();
    }catch(error){
      console.log(error);
    }
  }

}
