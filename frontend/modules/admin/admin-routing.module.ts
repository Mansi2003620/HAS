import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class AdminRoutingModule { }
