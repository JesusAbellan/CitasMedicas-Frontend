import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupMedicComponent } from './signup-medic.component';

const routes: Routes = [{ path: '', component: SignupMedicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupMedicRoutingModule { }
