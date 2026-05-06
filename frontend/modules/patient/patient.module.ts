import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
