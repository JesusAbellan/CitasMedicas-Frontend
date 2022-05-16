import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupMedicRoutingModule } from './signup-medic-routing.module';
import { SignupMedicComponent } from './signup-medic.component';
import { ComponentsModule } from '../../components/components.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    SignupMedicComponent,
  ],
  imports: [
    CommonModule,
    SignupMedicRoutingModule,
    ComponentsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class SignupMedicModule { }
