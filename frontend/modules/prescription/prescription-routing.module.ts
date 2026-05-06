import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    
    { path: 'add/:medicalhistoryid', component: AddComponent } ,
    { path: 'list/:medicalhistoryid', component: ListComponent } ,
    {path:'list',component:ListComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionRoutingModule { }
