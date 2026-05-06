import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DoctorRoutingModule } from './doctor-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  RouterModule } from '@angular/router';
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
     HttpClientModule,
    DoctorRoutingModule,
    RouterModule
   
  ]
})
export class DoctorModule { }
