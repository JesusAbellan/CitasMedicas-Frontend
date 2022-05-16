import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDatesComponent } from './new-dates.component';

const routes: Routes = [{ path: '', component: NewDatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDatesRoutingModule { }
