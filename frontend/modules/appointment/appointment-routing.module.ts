import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component'; 
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
    
  { path: 'add', component: AddComponent } ,
  { path: 'list/:role/:id', component: ListComponent } ,
  { path: 'edit/:id', component: EditComponent } ,
  {
    path:'list',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
