import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { ComponentsModule } from '../../components/components.module';
import { MatCardModule } from '@angular/material/card'


@NgModule({
  declarations: [
    TeamComponent,
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    ComponentsModule,
    MatCardModule
  ]
})
export class TeamModule { }
