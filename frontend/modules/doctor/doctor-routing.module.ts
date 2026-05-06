import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    
    { path: 'add', component: AddComponent } ,
    { path: 'list', component: ListComponent } ,
    { path: 'edit/:id', component: EditComponent },
    {path:'dashboard',component:DashboardComponent},
    { path: 'dashboard/:id', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
