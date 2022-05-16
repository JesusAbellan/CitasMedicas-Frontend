import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDatesRoutingModule } from './new-dates-routing.module';
import { NewDatesComponent } from './new-dates.component';
import { ComponentsModule } from '../../components/components.module';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker'


@NgModule({
  declarations: [
    NewDatesComponent,
  ],
  imports: [
    CommonModule,
    NewDatesRoutingModule,
    ComponentsModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class NewDatesModule { }
